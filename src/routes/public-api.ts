import express from "express";
import {UserController} from "../controller/user-controller";
import { UserWebController } from "../controller/user-web-controller";

export const publicRouter = express.Router();
publicRouter.get("/login", UserWebController.get);
publicRouter.post("/api/users", UserController.register);
publicRouter.post("/api/users/login", UserController.login);
