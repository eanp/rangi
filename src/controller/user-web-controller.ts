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

export class UserWebController {
  static async getLogin(req: UserRequest, res: Response, next: NextFunction) {
    try {
      res.setHeader("Content-Type", "text/html").status(200).render("auth/login-view", {
        ...initial_data, layout: "layout-main-view"
      });
      return
    } catch (e) {
      next(e);
    }
  }

  static async getRegister(req: UserRequest, res: Response, next: NextFunction) {
    try {
      res.setHeader("Content-Type", "text/html").status(200).render("auth/register-view", { ...initial_data, layout: "layout-main-view" });
      return
    } catch (e) {
      next(e);
    }
  }

  static async postLogin(req: UserRequest, res: Response, next: NextFunction) {
    try {
      let request: LoginUserRequest = await req.body as LoginUserRequest;
      let requestValidation = UserValidation.LOGIN.safeParse(request)
      if (requestValidation.error) {
        throw new webValidationError(request, requestValidation.error, "error")
      }

      let user = await prismaClient.user.findUnique({
        where: {
          email: request.email
        }
      })

      let result;
      if (!user) {
        result = res.render("auth/login-form", {
          ...initial_data,
          formResponse: { email: request.email },
          status: "error",
          messages: ["User isn't exists please register"],
          layout: false
        });
        res.send(result);
        return
      }

      const isPasswordValid = await argon2.verify(user.password, request.password)

      if (!isPasswordValid) {
        result = res.render("auth/login-form", {
          ...initial_data,
          formResponse: { email: request.email },
          status: "error",
          messages: ["Wrong Password"],
          layout: false
        });
        res.send(result);
        return
      }

      let session = await prismaClient.session.create({
        data: {
          id: uuid(),
          user_id: user.id,
          expired_at: new Date(Date.now() + 6.048e8 * 1), // one weeks default session ,
        },
      })
      res.cookie("x-session", session.id, cookieConfig)
      res.header({ "Hx-redirect": "/" }).send("Register Successful!");
      return
    } catch (error) {
      if (error instanceof webValidationError) {
        let result = res.render("auth/login-form", {
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

  static async postRegister(req: UserRequest, res: Response, next: NextFunction) {
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
        result = res.render("auth/register-form", {
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
      // create session
      let session = await prismaClient.session.create({
        data: {
          id: uuid(),
          user_id: user.id,
          expired_at: new Date(Date.now() + 6.048e8 * 1), // one weeks default session ,
        },
      })
      res.cookie("x-session", session.id, cookieConfig)
      res.header({ "Hx-redirect": "/" }).send("Register Successful!");
      return
    } catch (error) {
      if (error instanceof webValidationError) {
        let result = res.render("auth/register-form", {
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
    try {
      res.setHeader("Content-Type", "text/html").status(200).render("dashboard/profile-view", { ...initial_data, layout: "layout-main-view" });
      return
    } catch (e) {
      next(e);
    }
  }

  static async main(req: UserRequest, res: Response, next: NextFunction) {
    try {
      res.setHeader("Content-Type", "text/html").status(200).render("main", { ...initial_data, layout: "layout-main-view" });
      return
    } catch (e) {
      next(e);
    }
  }

  static async admin(req: WebRequest, res: Response, next: NextFunction) {
    const user = await prismaClient.user.update({
      where: {
        email: req.user?.email
      },
      data: {
        role: "admin",
        updated_at: new Date()
      }
    })

    if(!user){
      throw new ResponseError(400, "Change to admin Error");
    }
    return res.redirect("/logout");
  }
}