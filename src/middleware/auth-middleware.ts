import {MiddlewareHandler} from "hono";
import {UserService} from "../service/user-service";
import {
  getSignedCookie,
} from 'hono/cookie'
const secret_session_key = Bun.env.SECRET_SESSION_KEY ?? "";

export const authMiddleware: MiddlewareHandler = async (c, next) => {
    const token = c.req.header('Authorization')
    c.res.headers.append('X-Status', 'Debug message')
    const user = await UserService.get(token)

    c.set('user', user)
    await next()
}

export const webAuthMiddleware: MiddlewareHandler = async (c, next) => {
  const sessionId = await getSignedCookie(c, secret_session_key, "x-hono-session");

  if (!sessionId) {
    return c.redirect("/login");
  }

  const session = await UserService.getSession(sessionId)

  if (!session) {
    return c.redirect("/login");
  }

  const user = await UserService.getUserBySession(session.user_id)

  c.set('user', user)
  await next();
}