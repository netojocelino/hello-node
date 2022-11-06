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

    save (UserRepository) {
        const model = new UserRepository
        model.create(this)
    }

}

export default User
