import { Hono } from "hono";
import {
  LoginUserRequest,
  RegisterUserRequest,
  toUserResponse,
  UpdateUserRequest,
} from "../model/user-model";
import { UserService } from "../service/user-service";
import { ApplicationVariables } from "../model/app-model";
import { renderer, LoginForm, RegisterForm } from "../view/layout-view";
import { UserValidation } from "../validation/user-validation";
import { prismaClient } from "../application/database";
import { ZodError } from "zod";
import {
  ErrorMessageValidation,
  formatValidationErrors,
} from "../validation/error-message-validation";
import {
  deleteCookie,
  getCookie,
  setCookie,
  setSignedCookie,
} from "hono/cookie";
import { Session, User } from "@prisma/client";
import { webAuthMiddleware } from "../middleware/auth-middleware";
export const userWebController = new Hono<{
  Variables: ApplicationVariables;
}>();

userWebController.get("*", renderer);
const app_name = Bun.env.APP_NAME;

userWebController.get("/login", async (c) => {
  return c.render(
    <div class="flex h-screen flex-col bg-red-500">
      <h1 class="bg-blue-300">{app_name} Login</h1>
      <LoginForm email="" message={false} />
    </div>
  );
});

userWebController.get("/register", async (c) => {
  return c.render(
    <div class="flex h-screen flex-col bg-red-500">
      <h1 class="bg-blue-300">{app_name} Register</h1>
      <RegisterForm email="" message={false} />
    </div>
  );
});

userWebController.post("/login", async (c) => {
  const request = (await c.req.parseBody()) as LoginUserRequest;
  const requestValidation = UserValidation.LOGIN.safeParse(request);
  let message;
  if (!requestValidation.success) {
    message = formatValidationErrors(requestValidation.error);
    return c.render(<LoginForm email={request.email} message={message} />);
  }

  let user = await prismaClient.user.findUnique({
    where: {
      email: request.email,
    },
  });

  if (!user) {
    return c.render(
      <LoginForm
        email={request.email}
        message={["wrong email please register"]}
      />
    );
  }

  const isPasswordValid = await Bun.password.verify(
    request.password,
    user.password,
    "argon2d"
  );

  if (!isPasswordValid) {
    return c.render(
      <LoginForm email={request.email} message={["password is wrong"]} />
    );
  }

  const id = crypto.randomUUID();
  let session = await prismaClient.session.create({
    data: {
      id,
      user_id: user.id,
      expiredAt: new Date(Date.now() + 6.048e8 * 1), // one weeks default session ,
    },
  });

  if (!session) {
    return c.render(
      <LoginForm email={request.email} message={["cannot login session"]} />
    );
  }

  setCookie(c, "x-hono-session", id, {
    path: "/",
    secure: true,
    httpOnly: true,
    maxAge: 1000,
    expires: new Date(Date.now() + 6.048e8 * 1),
    sameSite: "Strict",
  });

  c.header("Hx-redirect", "/");

  return c.body("success login");
});

userWebController.post("/register", async (c) => {
  const request = (await c.req.parseBody()) as RegisterUserRequest;
  const requestValidation = UserValidation.REGISTER.safeParse(request);
  let message;
  if (!requestValidation.success) {
    message = formatValidationErrors(requestValidation.error);
    return c.render(<RegisterForm email={request.email} message={message} />);
  }

  const totalUserWithSameEmail = await prismaClient.user.count({
    where: {
      email: request.email,
    },
  });

  if (totalUserWithSameEmail != 0) {
    return c.render(
      <RegisterForm email={request.email} message={["Email already exists"]} />
    );
  }

  request.password = await Bun.password.hash(request.password, {
    algorithm: "argon2d",
  });

  const id = crypto.randomUUID();
  const user = await prismaClient.user.create({
    data: { ...request, id },
  });

  let session = await prismaClient.session.create({
    data: {
      id,
      user_id: id,
      expiredAt: new Date(Date.now() + 6.048e8 * 1), // one weeks default session ,
    },
  });

  if (!session || !user) {
    return c.render(
      <RegisterForm
        email={request.email}
        message={["cannot register session"]}
      />
    );
  }

  setCookie(c, "x-hono-session", id, {
    path: "/",
    secure: true,
    httpOnly: true,
    maxAge: 1000,
    expires: new Date(Date.now() + 6.048e8 * 1),
    sameSite: "Strict",
  });

  c.header("Hx-redirect", "/");

  return c.body("success register");
});

userWebController.get("/logout", async (c) => {
  const sessionId = getCookie(c, "x-hono-session");
  deleteCookie(c, "x-hono-session", {
    path: "/",
    secure: true,
  });
  await UserService.deleteSession(sessionId);

  return c.redirect("/login");
});

userWebController.get("/user", webAuthMiddleware, async (c) => {
  const user = c.get('user') as User;
  return c.render(
    <div class="flex h-screen flex-col bg-red-500">
      <h1 class="bg-blue-300">{app_name} User Page</h1>
      <p>{user.name ?? "-"}</p>
      <p>{user.email ?? "-"}</p>
      <p>{user.id ?? "-"}</p>
      <p>{user.createdAt.toString() ?? "-"}</p>
    </div>
  );
});

// userWebController.patch('/user', webAuthMiddleware, async (c) => {
// const user = c.get('session') as User
// const request = await c.req.json() as UpdateUserRequest;

// const response = await UserService.update(user, request)

// return c.json({
//     data: response
// })
// })
