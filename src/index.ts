import { Hono } from 'hono'
import {web} from "./web";

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/', web)

export default app
