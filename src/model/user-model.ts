import {User} from "@prisma/client";

export type RegisterUserRequest = {
    email: string;
    password: string;
    name: string;
    id?: string;
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
    createdAt: Date;
    updatedAt: Date;
}

export function toUserResponse(user: User): UserResponse {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        token: user.token || "-",
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    }
}
