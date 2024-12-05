import {Post} from "@prisma/client";

export type CreatePostRequest = {
  id?: string;
  title: string;
  content: string;
}

export type PostResponse = {
    id: string;
    title: string;
    content: string;
    created_at: Date;
    updated_at: Date;
}

export type UpdatePostRequest = {
    id: string;
    title: string;
    content: string;
}

export type SearchPostRequest = {
  title?: string;
  content?: string;
  page: number;
  size: number;
}


export function toPostResponse(post: Post): PostResponse {
    return {
        id: post.id,
        title: post.title,
        content: post.content,
        created_at: post.created_at,
        updated_at: post.updated_at
    }
}
