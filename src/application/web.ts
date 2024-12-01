import express from "express";
import {publicRouter} from "../routes/public-api";
import {errorMiddleware} from "../middleware/error-middleware";
import {apiRouter} from "../routes/api";
import expressLayouts from "express-ejs-layouts";
import path from 'path';

export const web = express();

// setup

web.set('views', path.join(__dirname, './../view'));
web.set("view engine", "ejs");
web.use(expressLayouts);
web.set("layout", "layout-main-view");
web.use("/public", express.static("public", {
  maxAge: "86400"
}));
web.use(express.json());
// route
web.use(publicRouter);
web.use(apiRouter);
web.use(errorMiddleware);
