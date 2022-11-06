import { areIntervalsOverlapping } from 'date-fns'


import Appointment from "../entities/Appointment"

import { AppointmentRepository } from "../repositories/appointments"

export class InMemoryAppointmentRepository implements AppointmentRepository {

    private items: Appointment[] = []

    async create(appointment: Appointment): Promise<void> {
        this.items.push(appointment)
    }

    async findOverlappingAppointment(startsAt: Date, endsAt: Date): Promise<Appointment | null> {
        console.log(this.items)
        const overlappingAppointment = this.items.find(
            appointment => areIntervalsOverlapping(
                { start: startsAt, end: endsAt },
                { start: appointment.startsAt, end: appointment.endsAt },
                { inclusive: true }
            )
        )
        if (overlappingAppointment === undefined) {
            return null
        }

        return overlappingAppointment
    }

}
