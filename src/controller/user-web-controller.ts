import {Request, Response, NextFunction} from "express";
import {LoginUserRequest, RegisterUserRequest, toUserResponse, UpdateUserRequest} from "../model/user-model";
import {UserService} from "../service/user-service";
import { UserRequest } from "../type/user-request";
import { initial_data } from "../utils/templating-utils";
export class UserWebController {
static async get(req: UserRequest, res: Response, next: NextFunction) {
  try {

    res.setHeader("Content-Type", "text/html").status(200).render("auth/login-form", {layout:false,title:"wow", });
    return
  } catch (e) {
      next(e);
  }
}
static async register(req: UserRequest, res: Response, next: NextFunction) {
  try {

    res.setHeader("Content-Type", "text/html").status(200).render("auth/register", {title:"wow", });
    return
  } catch (e) {
      next(e);
  }
}
}