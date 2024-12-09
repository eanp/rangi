import express from "express";
import { UserWebController } from "../controller/user-web-controller";
import { webAuthMiddleware } from "../middleware/auth-middleware";
import { UserDashboardController } from "../controller/user-dashboard-controller";
import { PostDashboardController } from "../controller/post-dashboard-controller";
export const webRouter = express.Router();
// User Web
webRouter.use(webAuthMiddleware)
webRouter.get("/dashboard", UserWebController.current);
webRouter.get("/setadmin", UserWebController.admin);
webRouter.get("/logout", UserWebController.logout);
// Users - Admin
webRouter.get("/dashboard/users", UserDashboardController.get);
webRouter.get("/dashboard/users", UserDashboardController.get);
webRouter.get("/dashboard/users/create", UserDashboardController.getUserCreate);
webRouter.post("/dashboard/users/create", UserDashboardController.postUser);
webRouter.get("/dashboard/users/update/:id", UserDashboardController.getUserUpdate);
webRouter.put("/dashboard/users/update/:id", UserDashboardController.updateUser);
webRouter.get("/dashboard/users/delete/:id", UserDashboardController.getUserDelete);
webRouter.get("/dashboard/users/delete/confirm/:id", UserDashboardController.deleteUser);
webRouter.get("/dashboard/users/:id", UserDashboardController.get);
// Post
webRouter.get("/dashboard/posts", PostDashboardController.get);
webRouter.get("/dashboard/posts/create", PostDashboardController.getPostCreate);
webRouter.post("/dashboard/posts/create", PostDashboardController.createPost);
webRouter.patch("/dashboard/posts", PostDashboardController.get);
webRouter.delete("/dashboard/posts", PostDashboardController.get);
