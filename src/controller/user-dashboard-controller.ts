import { Request, Response, NextFunction } from "express";
import { LoginUserRequest, RegisterUserRequest, SearchUserRequest, toUserResponse, UpdateUserRequest } from "../model/user-model";
import { UserService } from "../service/user-service";
import { UserRequest, WebRequest } from "../type/user-request";
import { initial_data, InitialData } from "../utils/templating-utils";
import { UserValidation } from "../validation/user-validation";
import { prismaClient } from "../application/database";
import { formatValidationErrors, webValidationError } from "../error/validation-error";
import argon2 from "argon2";
import { v4 as uuid } from "uuid";
import { cookieConfig } from "../utils/cookies-utils";
import { generatePagination } from "../utils/page-utils";
import path from "path";
import { Prisma } from "@prisma/client";
import { ResponseError } from "../error/response-error";

export class UserDashboardController {
  static async get(req: Request, res: Response, next: NextFunction) {
    try {
      const request: SearchUserRequest = {
        name: req.query.name as string,
        page: req.query.page ? Number(req.query.page) : 1,
        size: req.query.size ? Number(req.query.size) : 5
      }
      console.log(request.sort)

      const filters:object[] = [];
      const active_sorts: string[] = [];
      const list_sorts:object[] = [];

      const validSortFields = ['id', 'name', 'email', 'created_at', 'updated_at'];

      const query_list = Object.keys(req.query);
      query_list.forEach(sort_item => {
        let sort_field = (`${sort_item}`).split("-")[1]
        let sort_value = req.query[sort_item]
        if(validSortFields.includes(sort_field)){
          if(sort_value==="asc"){
            let list_sorts_item = {[sort_field] : sort_value}
            list_sorts.push(list_sorts_item)
            active_sorts.push(`${sort_field}-${sort_value}`)
          }
          if(sort_value==="desc"){
            let list_sorts_item = {[sort_field] : sort_value}
            list_sorts.push(list_sorts_item)
            active_sorts.push(`${sort_field}-${sort_value}`)
          }
        }

      });

      console.log("active_sorts")
      console.log(active_sorts)
      console.log("list_sorts")
      console.log(list_sorts)
      console.log("filters")
      console.log(filters)

      // error validation

      if (request.name && typeof (request.name) === "string") {
        filters.push({
          OR: [
            {
              name: {
                contains: request.name
              }
            },
            {
              email: {
                contains: request.name
              }
            }
          ]
        })
      }

      const skip = (request.page - 1) * request.size

      const users = await prismaClient.user.findMany({
        orderBy:list_sorts,
        where: {
          AND: filters
        },
        take: request.size,
        skip: skip,
        select: {
          id: true,
          name: true,
          email: true,
          created_at: true,
          updated_at: true
        }
      })

      const total = await prismaClient.user.count({
        where: {
          AND: filters
        }
      })

      const data = users.map(user => toUserResponse(user))

      const current_page = request.page
      const size = request.size
      const total_page = Math.ceil(total / request.size)
      const end_items = (total < skip + size) ? total : skip + size
      const pagination_meta = generatePagination(current_page, total_page)
      const meta = { current_page, size, total_page, pagination_meta, skip, end_items }
      console.log(data)
      console.log(meta)
      const tablehead = [{ name: "id", type: "sortable" }, { name: "name", type: "sortable" }, { name: "email", type: "sortable" }, { name: "created_at", type: "sortable" }, { name: "updated_at", type: "sortable" }, { name: "action", type: "action" }];

      res.setHeader("Content-Type", "text/html").status(200).render("dashboard/user-view", {
        ...initial_data, layout: "layout-main-view", path: "users", meta, data, tablehead, active_sorts
      });
      return
    } catch (e) {
      next(e);
    }
  }

  static async getUserCreate(req: Request, res: Response, next: NextFunction) {
    try {
      res.setHeader("Content-Type", "text/html").status(200).render("dashboard/user-create-view", {
        ...initial_data, layout: "layout-main-view", path: "users"
      });
      return
    } catch (e) {
      next(e);
    }
  }
  static async getUserUpdate(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const user = await prismaClient.user.findFirst({
        where: {
          id: req.params.id
        }
      })

      if (!user) {
        throw new Error("user not found")
      }

      res.setHeader("Content-Type", "text/html").status(200).render("dashboard/user-update-view", {
        ...initial_data, layout: "layout-main-view", formResponse: { ...toUserResponse(user) }
      });
      return
    } catch (error) {
      res.redirect("/users/")
      return
    }
  }

  static async postUser(req: UserRequest, res: Response, next: NextFunction) {
    try {
      let request: RegisterUserRequest = await req.body as RegisterUserRequest;
      let requestValidation = UserValidation.REGISTER.safeParse(request)
      if (requestValidation.error) {
        throw new webValidationError(request, requestValidation.error, "error")
      }
      const totalUserWithSameEmail = await prismaClient.user.count({
        where: {
          email: request.email
        }
      });
      let result;
      if (totalUserWithSameEmail != 0) {
        result = res.render("dashboard/user-form", {
          ...initial_data,
          formResponse: { email: request.email },
          status: "error",
          messages: ["Email already exists"],
          layout: false
        });
        res.send(result);
        return
      }
      request.password = await argon2.hash(request.password);
      const user = await prismaClient.user.create({
        data: { ...request, id: uuid() }
      })

      res.header({ "Hx-redirect": "/users" }).send(`Create User ${user.name} Success!`);
      return
    } catch (error) {
      if (error instanceof webValidationError) {
        let result = res.render("dashboard/user-form", {
          ...initial_data,
          formResponse: { ...error.request },
          status: error.message,
          messages: formatValidationErrors(error.zodMessage),
          layout: false
        });
        res.send(result);
        return
      } else {
        next(error)
      }
    }
  }
  static async updateUser(req: UserRequest, res: Response, next: NextFunction) {
    try {
      let user = req.user!
      const request: UpdateUserRequest = req.body as UpdateUserRequest;

      if (request.password === "") {
        delete request.password
      }

      let requestValidation = UserValidation.UPDATE.safeParse(request)
      if (requestValidation.error) {
        throw new webValidationError({ ...toUserResponse(user) }, requestValidation.error, "error")
      }

      let result;
      if (request.name === user.name && (!request.password)) {
        result = res.render("dashboard/user-form-update", {
          ...initial_data,
          formResponse: { ...toUserResponse(user) },
          status: "success",
          messages: ["Nothing change update user data"],
          layout: false
        });
      }

      if (request.name) {
        user.name = request.name
      }
      if (request.password) {
        user.password = await argon2.hash(request.password);
      }

      user = await prismaClient.user.update({
        where: {
          email: user.email
        },
        data: user
      })

      console.log("user-")
      console.log(request)
      console.log(user)
      if (!user) {
        result = res.render("dashboard/user-form-update", {
          ...initial_data,
          formResponse: { ...toUserResponse(user) },
          status: "error",
          messages: ["Error update user data"],
          layout: false
        });
        res.send(result);
        return
      }
      result = res.render("dashboard/user-form-update", {
        ...initial_data,
        formResponse: { ...toUserResponse(user) },
        status: "success",
        messages: ["Success update user data"],
        layout: false
      });
      res.send(result);
      return
    } catch (error) {
      if (error instanceof webValidationError) {
        let result = res.render("dashboard/user-form-update", {
          ...initial_data,
          formResponse: { ...error.request },
          status: error.message,
          messages: formatValidationErrors(error.zodMessage),
          layout: false
        });
        res.send(result);
        return
      } else {
        next(error)
      }
    }
  }

  static async getUserDelete(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const user = await prismaClient.user.findFirst({
        where: {
          id: req.params.id
        }
      })

      if (!user) {
        res.redirect("/users")
        return
      }

      res.setHeader("Content-Type", "text/html").status(200).render("dashboard/user-delete-view", {
        ...initial_data, layout: "layout-main-view", formResponse: { ...toUserResponse(user) }
      });
      return
    } catch (error) {
      res.redirect("/users")
      return
    }
  }

  static async deleteUser(req: UserRequest, res: Response, next: NextFunction) {
    try {
      if(req.user?.id === req.params.id){
        throw new ResponseError(400, "Can't Destroy yourself");
      }
      await prismaClient.user.deleteMany({
        where: {
          id: req.params.id
        }
      })
      res.redirect("/users")
      return
    } catch (error) {
      res.redirect("/users")
      return
    }
  }

  static async logout(req: WebRequest, res: Response, next: NextFunction) {
    if (!req.session) {
      return res.redirect("/login");
    }

    await prismaClient.session.deleteMany({
      where: {
        id: req.session
      }
    })
    res.clearCookie("x-session");
    return res.redirect("/login");
  }

  static async current(req: UserRequest, res: Response, next: NextFunction) {
    console.log(req.user)
    let user = {
      name: req?.user?.name || "",
      email: req?.user?.email || "",
    }
    try {
      res.setHeader("Content-Type", "text/html").status(200).render("dashboard/profile-view", { ...initial_data, user, layout: "layout-main-view" });
      return
    } catch (e) {
      next(e);
    }
  }
}