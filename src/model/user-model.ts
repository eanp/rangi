import { User } from "@prisma/client";

export type RegisterUserRequest = {
  email: string;
  password: string;
  name: string;
  id?: string | null;
}

export type LoginUserRequest = {
  email: string;
  password: string;
}

export type UpdateUserRequest = {
  password?: string;
  name?: string;
}

export type UserResponse = {
  id: string;
  name: string;
  email: string;
  token?: string;
  created_at: Date;
  updated_at: Date;
  role: string;
}

export type SearchUserRequest = {
  name?: string | null;
  sort?: string | null;
  page: number;
  size: number;
}

export function toUserResponse(user: User): UserResponse {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    token: user.token || "-",
    created_at: user.created_at,
    updated_at: user.updated_at,
    role: user.role,
  }
}
