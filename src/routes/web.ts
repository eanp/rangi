import express from "express";
import { UserWebController } from "../controller/user-web-controller";
import { webAuthMiddleware } from "../middleware/auth-middleware";
import { UserDashboardController } from "../controller/user-dashboard-controller";
export const webRouter = express.Router();
// User Web
webRouter.use(webAuthMiddleware)
webRouter.get("/", UserWebController.current);
webRouter.get("/logout", UserWebController.logout);
// Users - Admin
webRouter.get("/users", UserDashboardController.get);
webRouter.get("/users/create", UserDashboardController.getUserCreate);
webRouter.post("/users/create", UserDashboardController.postUser);
webRouter.get("/users/update/:id", UserDashboardController.getUserUpdate);
webRouter.put("/users/update/:id", UserDashboardController.updateUser);
webRouter.get("/users/delete/:id", UserDashboardController.getUserDelete);
webRouter.get("/users/delete/confirm/:id", UserDashboardController.deleteUser);
webRouter.get("/users/:id", UserDashboardController.get);
// Post
webRouter.get("/posts", UserDashboardController.get);
webRouter.post("/posts", UserDashboardController.get);
webRouter.patch("/posts", UserDashboardController.get);
webRouter.delete("/posts", UserDashboardController.get);
