import { Request, Response, NextFunction } from "express";
import { LoginUserRequest, RegisterUserRequest, toUserResponse, UpdateUserRequest } from "../model/user-model";
import { UserService } from "../service/user-service";
import { UserRequest, WebRequest } from "../type/user-request";
import { initial_data, InitialData } from "../utils/templating-utils";
import { UserValidation } from "../validation/user-validation";
import { prismaClient } from "../application/database";
import { formatValidationErrors, webValidationError } from "../error/validation-error";
import argon2 from "argon2";
import { v4 as uuid } from "uuid";
import { cookieConfig } from "../utils/cookies-utils";
import { ResponseError } from "../error/response-error";
import { CreatePostRequest, SearchPostRequest } from "../model/post-model";
import { generatePagination } from "../utils/page-utils";
import { PostValidation } from "../validation/post-validation";

export class PostDashboardController {
  static async get(req: Request, res: Response, next: NextFunction) {
    try {
      // admin
      const request: SearchPostRequest = {
        search: req.query.search as string,
        page: req.query.page ? Number(req.query.page) : 1,
        size: req.query.size ? Number(req.query.size) : 5
      }

      const filters: object[] = [];
      const active_sorts: string[] = [];
      const list_sorts: object[] = [];

      const validSortFields = ['id', 'title', 'content', 'created_at', 'updated_at'];
      const query_list = Object.keys(req.query);
      query_list.forEach(sort_item => {
        let sort_field = (`${sort_item}`).split("-")[1]
        let sort_value = req.query[sort_item]
        if (validSortFields.includes(sort_field)) {
          if (sort_value === "asc") {
            let list_sorts_item = { [sort_field]: sort_value }
            list_sorts.push(list_sorts_item)
            active_sorts.push(`${sort_field}-${sort_value}`)
          }
          if (sort_value === "desc") {
            let list_sorts_item = { [sort_field]: sort_value }
            list_sorts.push(list_sorts_item)
            active_sorts.push(`${sort_field}-${sort_value}`)
          }
        }
      });

      if (request.search && typeof (request.search) === "string") {
        filters.push({
          OR: [
            {
              title: {
                contains: request.search
              }
            },
            {
              content: {
                contains: request.search
              }
            }
          ]
        })
      }

      const skip = (request.page - 1) * request.size

      const posts = await prismaClient.post.findMany({
        orderBy: list_sorts,
        where: {
          AND: filters
        },
        take: request.size,
        skip: skip,
        select: {
          id: true,
          title: true,
          content: true,
          created_at: true,
          updated_at: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              created_at: true,
              updated_at: true
            }
          }
        },
      })

      const total = await prismaClient.post.count({
        where: {
          AND: filters
        }
      })
      const data = posts

      const current_page = request.page
      const size = request.size
      const total_page = Math.ceil(total / request.size)
      const end_items = (total < skip + size) ? total : skip + size
      const pagination_meta = generatePagination(current_page, total_page)
      const meta = { current_page, size, total_page, pagination_meta, skip, end_items }

      console.log(data, meta)


      const tablehead = [{ name: "id", type: "sortable" }, { name: "title", type: "sortable" }, { name: "content", type: "sortable" }, { name: "created_at", type: "sortable" }, { name: "updated_at", type: "sortable" }, { name: "author", type: "role" }, { name: "action", type: "action" }];

      res.setHeader("Content-Type", "text/html").status(200).render("dashboard/post/post-view", {
        ...initial_data, layout: "layout-main-view", path: "posts", meta, data, tablehead, active_sorts
      });
      return
    } catch (e) {
      next(e);
    }
  }


  static async getPostCreate(req: Request, res: Response, next: NextFunction) {
    try {
      res.setHeader("Content-Type", "text/html").status(200).render("dashboard/post/post-create-view", {
        ...initial_data, layout: "layout-main-view", path: "posts"
      });
      return
    } catch (e) {
      next(e);
    }
  }

  static async createPost(req: UserRequest, res: Response, next: NextFunction) {
    try {
      let request: CreatePostRequest = await req.body as CreatePostRequest;
      let requestValidation = PostValidation.CREATE.safeParse(request)
      if (requestValidation.error) {
        throw new webValidationError(request, requestValidation.error, "error")
      }
      let result;
      const post = await prismaClient.post.create({
        data: { ...request, id: uuid(), user_id: req.user.id }
      })

      res.header({ "Hx-redirect": "/posts" }).send(`Create Post ${post.title} Success!`);
      return
    } catch (error) {
      if (error instanceof webValidationError) {
        let result = res.render("dashboard/post/post-form", {
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

}