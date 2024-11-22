import {MiddlewareHandler} from "hono";
import {UserService} from "../service/user-service";

export const authMiddleware: MiddlewareHandler = async (c, next) => {
    const token = c.req.header('Authorization')
    c.res.headers.append('X-Status', 'Debug message')
    const user = await UserService.get(token)

    c.set('user', user)

    await next()
}
