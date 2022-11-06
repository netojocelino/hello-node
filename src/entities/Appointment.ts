export interface AppointmentProps {
    startsAt: Date
    endsAt: Date
    customer: {
        name: String
        email: String
    }
}

class Appointment {
    private props: AppointmentProps

    constructor (props: AppointmentProps) {

        if (props.startsAt <= new Date()) {
            throw new Error("Invalid date interval, you're not a time traveler")
        }

        if (props.endsAt <= props.startsAt) {
            throw new Error("Invalid date interval, we're not a time traveler")
        }

        this.props = props
    }

    get startsAt ()  {
        return this.props.startsAt
    }

    get endsAt () {
        return this.props.endsAt
    }

    get customer () {
        return this.props.customer
    }
}

export default Appointment
