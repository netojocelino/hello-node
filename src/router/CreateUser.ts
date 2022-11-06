import CreateUserUseCase from '../usecases/CreateUser'
import type { CreateUserRequestType, ResponseType } from '../types/Request'

export default class CreateUser {
    async route (request: CreateUserRequestType): Promise<ResponseType> {
        this.validate(request)

        const { email, password, repeatPassword } = request.body

        const User = await new CreateUserUseCase().signup(email, password, repeatPassword)

        return {
            statusCode: 200,
            body: User,
        }
    }


    validate (request: any) : request is CreateUserRequestType {
        return (
            request.email !== undefined &&
            request.email !== null &&
            request.password !== undefined &&
            request.password !== null &&
            request.repeatPassword !== undefined
        )
    }
}
