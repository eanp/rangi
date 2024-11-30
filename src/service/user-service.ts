import {
  LoginUserRequest,
  RegisterUserRequest,
  toUserResponse,
  UpdateUserRequest,
  UserResponse
} from "../model/user-model";
import { UserValidation } from "../validation/user-validation";
import { prismaClient } from "../application/database";
import { Session, User } from "@prisma/client";
import { v4 as uuid } from "uuid";
import { Validation } from "../validation/validation";
import { ResponseError } from "../error/response-error";
import argon2 from "argon2";

export class UserService {

  static async register(request: RegisterUserRequest): Promise<UserResponse> {
    request = UserValidation.REGISTER.parse(request)

    const totalUserWithSameEmail = await prismaClient.user.count({
      where: {
        email: request.email
      }
    });

    if (totalUserWithSameEmail != 0) {
      throw new ResponseError(400, "Email already exists");
    }
    console.log(request.password )
    request.password = await argon2.hash(request.password);
    console.log(request.password )

    const user = await prismaClient.user.create({
      data: { ...request, id: uuid() }
    })

    const response = toUserResponse(user);
    response.token = user.token!;
    return response;
  }


  static async login(request: LoginUserRequest): Promise<UserResponse> {
    const registerRequest = Validation.validate(UserValidation.LOGIN, request);

    let user = await prismaClient.user.findUnique({
      where: {
        email: registerRequest.email
      }
    })

    if (!user) {
      throw new ResponseError(401, "email or password is wrong");
    }

    const isPasswordValid = await argon2.verify(user.password,registerRequest.password)
    if (!isPasswordValid) {
      throw new ResponseError(401, "email or password is wrong");
    }

    user = await prismaClient.user.update({
      where: {
        email: registerRequest.email
      },
      data: {
        token: uuid(),
        updatedAt: new Date()
      }
    })

    const response = toUserResponse(user)
    response.token = user.token!;
    return response
  }

  static async get(token: string | undefined | null): Promise<User> {
    const result = UserValidation.TOKEN.safeParse(token)

    if (result.error) {
      throw new ResponseError(401, "Unauthorized");

    }

    token = result.data;

    const user = await prismaClient.user.findFirst({
      where: {
        token: token
      }
    })

    if (!user) {
      throw new ResponseError(401, "Unauthorized");
    }

    return user;
  }

  static async update(user: User, request: UpdateUserRequest): Promise<UserResponse> {
    const updateRequest = Validation.validate(UserValidation.UPDATE, request);

    if (updateRequest.name) {
      user.name = updateRequest.name
    }

    if (updateRequest.password) {
      user.password = await argon2.hash(updateRequest.password);
    }

    user = await prismaClient.user.update({
      where: {
        email: user.email
      },
      data: user
    })

    return toUserResponse(user)
  }

  static async logout(user: User): Promise<boolean> {
    await prismaClient.user.update({
      where: {
        email: user.email
      },
      data: {
        token: null
      }
    })

    return true;
  }

  // session
  static async getSession(session_token: string | undefined | null): Promise<Session | false> {
    const result = UserValidation.TOKEN.safeParse(session_token)

    if (result.error || !session_token) {
      return false
    }

    const session = await prismaClient.session.findFirst({
      where: {
        id: session_token
      }
    })

    if (!session) {
      return false
    }

    console.log("session")
    console.log(session)

    return session;
  }

  static async getUserBySession(id: string): Promise<User> {
    const result = UserValidation.TOKEN.safeParse(id)

    if (result.error) {
      throw new ResponseError(401, "Unauthorized");
    }

    const user = await prismaClient.user.findFirst({
      where: {
        id
      }
    })

    if (!user) {
      throw new ResponseError(401, "Unauthorized");
    }

    return user;
  }

  static async deleteSession(session_token: string | undefined | null): Promise<boolean> {
    const result = UserValidation.TOKEN.safeParse(session_token)

    if (result.error || !session_token) {
      return false
    }

    await prismaClient.session.deleteMany({
      where: {
        id: session_token
      }
    })

    return true
  }

}
