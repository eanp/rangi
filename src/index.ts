import { Hono } from 'hono'
import {web} from "./web.jsx";
import {serveStatic} from "hono/bun";
import { userController } from './controller/user-controller.js';
import { HTTPException } from 'hono/http-exception';
import { ZodError } from 'zod';
import {requestId} from "hono/request-id";

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.onError(async (err, c) => {
  if (err instanceof HTTPException) {
      c.status(err.status)
      return c.json({
          errors: err.message
      })
  } else if (err instanceof ZodError) {
      c.status(400)
      return c.json({
          errors: err.message
      })
  } else {
      c.status(500)
      return c.json({
          errors: err.message
      })
  }
})

app.use(requestId())
app.route('/', userController)
// app.route('/', web)
app.use("/public/*", serveStatic({root: "./"}))


export default app
