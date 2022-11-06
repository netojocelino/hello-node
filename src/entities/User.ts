import DatabaseUserRepository from "../repositories/user-repository"

export interface UserProps {
    id?: string

    email: string
    password: string
}

class User {
    private props: UserProps

    constructor (props: UserProps) {
        this.props = props
    }

    get email ()  {
        return this.props.email
    }

    get id () {
        return this.props.id
    }

    get password () {
        return this.props.password
    }

    toJson () {
        return {
            email: this.email,
            password: this.password,
            id: this.id,
        }
    }

    save () {
        const model = new DatabaseUserRepository
        return model.create(this)
    }

}

export default User
