import { Hono } from 'hono'
import {serveStatic} from "hono/bun";
import { userController } from './controller/user-controller.js';
import { HTTPException } from 'hono/http-exception';
import { ZodError } from 'zod';
import {requestId} from "hono/request-id";
import { postController } from './controller/post-controller.js';
import { userWebController } from './controller/user-web-controller.js';
import { webAuthMiddleware } from './middleware/auth-middleware.js';
import { logger } from 'hono/logger'

const app = new Hono()

app.use(logger())
app.use("/public/*", serveStatic({root: "./"}))

app.get('/',webAuthMiddleware, (c) => {
  return c.text('Hello Hono!')
})

app.onError(async (err, c) => {
  if (err instanceof HTTPException) {
      c.status(err.status)
      return c.json({
          status: "error",
          errors: err.message
      })
  } else if (err instanceof ZodError) {
      c.status(400)
      return c.json({
          errors: "validation_error",
          validation_error: err.message
      })
  } else {
      c.status(500)
      return c.json({
        errors: "server_error",
        server_error: err.message
      })
  }
})

app.use(requestId())
app.route('/', userWebController)
// with authentication
app.route('/', userController)
app.route('/', postController)

export default app
