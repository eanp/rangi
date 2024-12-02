import express from "express";
import { UserWebController } from "../controller/user-web-controller";
import { webAuthMiddleware } from "../middleware/auth-middleware";
export const webRouter = express.Router();
// User Web
webRouter.use(webAuthMiddleware)
webRouter.get("/", UserWebController.current);
webRouter.get("/logout", UserWebController.logout);