import Appointment from "../entities/Appointment"
import { AppointmentRepository } from "../repositories/appointments"

interface CreateAppointmentRequest {
    startsAt: Date
    endsAt: Date
    customer: {
        name: String
        email: String
    }
}

type CreateAppointmentResponse = Appointment

export default class CreateAppointment {

    constructor (
        private appointmentRepository: AppointmentRepository
    ) {
        // not used yet
    }

    async execute ({
        customer,
        endsAt,
        startsAt,
    }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
        const overlappingAppointment = await this.appointmentRepository.findOverlappingAppointment(
            startsAt,
            endsAt
        )

        if (overlappingAppointment !== null) {
            throw new Error("Another appointment overlaps this appointment date")
        }

        const appointmentData = {
            customer,
            endsAt,
            startsAt,
        }

        const appointment = await new Appointment(appointmentData)

        await this.appointmentRepository.create(appointment)

        return appointment
    }

}
