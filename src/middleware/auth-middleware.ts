import {MiddlewareHandler} from "hono";
import {UserService} from "../service/user-service";
import {
  getCookie,
} from 'hono/cookie'

export const authMiddleware: MiddlewareHandler = async (c, next) => {
    const token = c.req.header('Authorization')
    c.res.headers.append('X-Status', 'Debug message')
    const user = await UserService.get(token)

    c.set('user', user)

    await next()
}

export const webAuthMiddleware: MiddlewareHandler = async (c, next) => {
  const sessionId = getCookie(c, "x-hono-session");
  const session = await UserService.getSession(sessionId)

  if (!sessionId || !session) {
    return c.redirect("/login");
  }

  const user = await UserService.getUserBySession(session.user_id)

  c.set('user', user)
  await next();
}