import User from "../entities/User";
import prisma from "./prisma";

export default class DatabaseUserRepository {

    async create(user: User): Promise<{ id: number }> {

        const User = await prisma.user.create({
            data: {
                email: user.email,
                password: user.password,
            },
            select: {
                id: true,
                email: true,
            }
        })

        return User
    }
}
