interface Request<T> {
    body: T
}


export type CreateUserRequestType = Request<{
    email: string
    password: string
    repeatPassword: string
}>

export type ResponseType = {
    statusCode?: number
    body?: any
}
