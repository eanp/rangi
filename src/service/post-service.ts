import { Post, User } from "@prisma/client";
import {
  CreatePostRequest,
  PostResponse,
  SearchPostRequest,
  toPostResponse,
  UpdatePostRequest
} from "../model/post-model";
import { PostValidation } from "../validation/post-validation";
import { prismaClient } from "../application/database";
import { HTTPException } from "hono/http-exception";
import { Pageable } from "../model/page-model";
import { generatePagination } from "../utils/page-utils";

export class PostService {

  static async create(user: User, request: CreatePostRequest): Promise<PostResponse> {
    request = PostValidation.CREATE.parse(request)

    let data = {
      ...request,
      ...{ user_id: user.id }
    }

    const post = await prismaClient.post.create({
      data: { ...data, id: crypto.randomUUID() }
    })

    return toPostResponse(post)
  }

  static async get(user: User, postId: string): Promise<PostResponse> {
    postId = PostValidation.GET.parse(postId)
    const post = await this.postMustExists(user, postId)
    return toPostResponse(post)
  }

  static async postMustExists(user: User, postId: string): Promise<Post> {
    const post = await prismaClient.post.findFirst({
      where: {
        id: postId
      }
    })

    if (!post) {
      throw new HTTPException(404, {
        message: "Post is not found"
      })
    }

    return post
  }

  static async update(user: User, request: UpdatePostRequest): Promise<PostResponse> {
    request = PostValidation.UPDATE.parse(request)
    await this.postMustExists(user, request.id)

    const post = await prismaClient.post.update({
      where: {
        id: request.id
      },
      data: {
        ...request
      }
    })

    return toPostResponse(post)
  }

  static async delete(user: User, postId: string): Promise<boolean> {
    postId = PostValidation.DELETE.parse(postId)
    await this.postMustExists(user, postId)

    await prismaClient.post.delete({
      where: {
        user_id: user.id,
        id: postId
      }
    })

    return true
  }

  static async search(user: User, request: SearchPostRequest): Promise<Pageable<PostResponse>> {
    request = PostValidation.SEARCH.parse(request)

    const filters = [];

    if (request.title) {
      filters.push({
        title: {
          contains: request.title
        }
      })
    }

    if (request.content) {
      filters.push({
        content: {
          contains: request.content
        }
      })
    }

    const skip = (request.page - 1) * request.size

    const posts = await prismaClient.post.findMany({
      where: {
        user_id: user.id,
        AND: filters
      },
      take: request.size,
      skip: skip
    })

    const total = await prismaClient.post.count({
      where: {
        user_id: user.id,
        AND: filters
      }
    })
    const current_page = request.page
    const size = request.size
    const total_page = Math.ceil(total / request.size)

    const pagination_meta = generatePagination(current_page, total_page)


    return {
      data: posts.map(post => toPostResponse(post)),
      meta: { current_page, size, total_page, pagination_meta }
    }
  }

}
