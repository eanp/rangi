import express from "express";
import {UserController} from "../controller/user-controller";
import { UserWebController } from "../controller/user-web-controller";
import { cookiesPublicRoute } from "../middleware/auth-middleware";

export const publicRouter = express.Router();
publicRouter.get("/", UserWebController.main);
publicRouter.get("/register", cookiesPublicRoute, UserWebController.getRegister);
publicRouter.post("/register", UserWebController.postRegister);
publicRouter.get("/login", cookiesPublicRoute, UserWebController.getLogin);
publicRouter.post("/login", UserWebController.postLogin);
publicRouter.post("/api/users", UserController.register);
publicRouter.post("/api/users/login", UserController.login);
