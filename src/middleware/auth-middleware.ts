import {Request, Response, NextFunction} from "express";
import {prismaClient} from "../application/database";
import {UserRequest} from "../type/user-request";
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

export const webAuthMiddleware = async (req: UserRequest, res: Response, next: NextFunction) => {
  // cookieParser
  // res.cookie('name', 'GeeksForGeeks', { signed: true }).send();
  const sessionId = await req.signedCookies("x-hono-session");
  console.log(req.signedCookies)

  if (!sessionId) {
    return res.redirect("/login");
  }

  const session = await UserService.getSession(sessionId)

  if (!session) {
    return res.redirect("/login");
  }

  const user = await UserService.getUserBySession(session.user_id)
  req.user = user;

  await next();
}