import {Hono} from "hono";
import {ApplicationVariables} from "../model/app-model";
import {User} from "@prisma/client";
import {PostService} from "../service/post-service";
import {CreatePostRequest, SearchPostRequest, UpdatePostRequest} from "../model/post-model";
import { authMiddleware } from "../middleware/auth-middleware";

export const postController = new Hono<{ Variables: ApplicationVariables }>();
postController.use(authMiddleware)

postController.post('/api/post', async (c) => {
  const user = c.get('user') as User
  const request = await c.req.json() as CreatePostRequest
  const response = await PostService.create(user, request)

  return c.json({
      data: response
  })
})

postController.get('/api/post/:id', async (c) => {
  const user = c.get('user') as User
  const postId = c.req.param("id")
  const response = await PostService.get(user, postId)

  return c.json({
      data: response
  })
})

postController.put('/api/post/:id', async (c) => {
  const user = c.get('user') as User
  const postId = c.req.param("id")
  const request = await c.req.json() as UpdatePostRequest
  request.id = postId
  const response = await PostService.update(user, request)

  return c.json({
      data: response
  })
})

postController.delete('/api/post/:id', async (c) => {
  const user = c.get('user') as User
  const postId = c.req.param("id")
  const response = await PostService.delete(user, postId)

  return c.json({
      data: response
  })
})

postController.get('/api/posts', async (c) => {
  const user = c.get('user') as User
  const request: SearchPostRequest = {
      title: c.req.query("title"),
      content: c.req.query("content"),
      page: c.req.query("page") ? Number(c.req.query("page")) : 1,
      size: c.req.query("size") ? Number(c.req.query("size")) : 10,
  }
  const response = await PostService.search(user, request)
  return c.json(response)
})