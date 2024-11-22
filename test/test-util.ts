import { prismaClient } from "../src/application/database";

export class UserTest {

  static async create() {
    await prismaClient.user.create({
      data: {
        id: crypto.randomUUID(),
        email: "test@gmail.com",
        name: "test",
        password: await Bun.password.hash("test", {
          algorithm: "argon2d"
        }),
        token: "test"
      }
    })
  }

  static async delete() {
    await prismaClient.user.deleteMany({
      where: {
        email: "test@gmail.com",
      }
    })
  }

}
