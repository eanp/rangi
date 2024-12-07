import express from "express";
import {publicRouter} from "../routes/public-api";
import {errorMiddleware} from "../middleware/error-middleware";
import {apiRouter} from "../routes/api";
import expressLayouts from "express-ejs-layouts";
import path from 'path';
import bodyParser from "body-parser";
import { webRouter } from "../routes/web";
import cookieParser from "cookie-parser";
import morgan from "morgan";

export const web = express();

// setup
web.use(bodyParser.urlencoded({ extended: true }));
web.set('views', path.join(__dirname, './../view'));
web.set("view engine", "ejs");
web.use(expressLayouts);
web.set("layout", "layout-main-view");
web.use("/public", express.static("public"));
web.use(express.json());
web.use(cookieParser(process.env.SECRET_SESSION_KEY))
web.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
// route
web.use(publicRouter);
web.use(webRouter)
web.use(apiRouter);
web.use(errorMiddleware);
