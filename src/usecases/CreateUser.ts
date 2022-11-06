import UserDTO from '../entities/User'

export default class CreateUser {

    async signup (email: string, password: string, repeatPassword: string) {
        if (password !== repeatPassword) {
            throw new Error("Password must be equals to RepeatPassword");
        }

        const userDto = new UserDTO({
            email: email,
            password: password,
        })

        return await userDto.save()
    }
}
