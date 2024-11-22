import { Hono } from "hono";
import {requestId} from 'hono/request-id'
import { db } from "./models/db";

export const web = new Hono().basePath("/web");

web.use(requestId())

web.get("/todo", (c) => {
  const html = (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://unpkg.com/htmx.org@1.9.3"></script>
        <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>Hono + htmx</title>
      </head>
      <body>
        <div class="p-4">
          <h1 class="text-4xl font-bold mb-4">
            <a href="/">Todo</a>
          </h1>
          {/*  */}
          <div id="todo"></div>
          <form
            hx-post="/web/todo"
            hx-target="#todo"
            class="mb-4"
          >
            <div class="mb-2">
              <input
                name="id"
                hidden
                value={c.get('requestId')}
              />
              <input
                name="content"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5"
              />
            </div>
            <button
              class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2 text-center"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </body>
    </html>
  );

  return c.html(html);
});

web.post("/todo",async (c) => {
  const body = await c.req.formData()
  const id = body.get('id')
  const content = body.get('content')
  console.log(body.get('id'))
  console.log(body.get('content'))
  try{
    db.prepare("INSERT INTO todo (id, content) VALUES (@id, @content)").run({id,content})
    return c.html(<html><h1>success</h1></html>)
  } catch(err){
    return c.html(<html><h1>error</h1></html>)
  }
})