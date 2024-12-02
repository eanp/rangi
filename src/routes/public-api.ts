import express from "express";
import {UserController} from "../controller/user-controller";
import { UserWebController } from "../controller/user-web-controller";

export const publicRouter = express.Router();
publicRouter.get("/register", UserWebController.getRegister);
publicRouter.post("/register", UserWebController.postRegister);
publicRouter.get("/login", UserWebController.getLogin);
publicRouter.post("/login", UserWebController.postLogin);
publicRouter.post("/api/users", UserController.register);
publicRouter.post("/api/users/login", UserController.login);
