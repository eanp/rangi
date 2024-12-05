import {Request, Response, NextFunction} from "express";
import {prismaClient} from "../application/database";
import {UserRequest, WebRequest} from "../type/user-request";
import {UserService} from "../service/user-service";
import * as cookieParser from "cookie-parser";

const secret_session_key = process.env.SECRET_SESSION_KEY ?? "";
export const authMiddleware = async (req: UserRequest, res: Response, next: NextFunction) => {
    const token = req.get('Authorization')

    if (token) {
      const user = await prismaClient.user.findFirst({
        where: {
          token: token
        }
      });
        if (user) {
            req.user = user;
            next();
            return;
        }
    }

    res.status(401).json({
        errors: "Unauthorized"
    }).end();
}

export const webAuthMiddleware = async (req: WebRequest, res: Response, next: NextFunction) => {
  const sessionId = req.signedCookies["x-session"];
  req.session = sessionId

  if (!sessionId) {
    return res.redirect("/login");
  }

  const session = await UserService.getSession(sessionId)

  if (!session) {
    res.clearCookie("x-session");
    return res.redirect("/login");
  }

  const user = await UserService.getUserBySession(session.user_id)
  req.user = user;
  res.locals.username = user.name;
  res.locals.usermail = user.email;
  res.locals.query = req.query;
  res.locals.url =  req.protocol + "://" + req.get('host') + req.originalUrl;

  next();
}

export const cookiesPublicRoute = async (req: Request, res: Response, next: NextFunction) => {
  const sessionId = req.signedCookies["x-session"];

  if (sessionId) {
    return res.redirect("/");
  }

  next()
}