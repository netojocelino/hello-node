import { describe, expect, it } from "vitest"
import Appointment from "../entities/Appointment"
import { InMemoryAppointmentRepository } from "../in-memory/appointment-repository"
import { getFutureYear } from "../utils/get-date"

import CreateAppointment from "./CreateAppointment"

describe('Create Appointment', () => {
    it('Should be able to create an appointment', () => {
        const sut = new CreateAppointment(
            new InMemoryAppointmentRepository()
        ) // System Under Test

        const customer = {
            name: 'John Smith',
            email: 'john.smith@email.com'
        }
        const startsAt = getFutureYear('2022-09-26')
        const endsAt = getFutureYear('2022-09-27')

        expect(sut.execute({
            customer,
            startsAt,
            endsAt,
        })).resolves.toBeInstanceOf(Appointment)
    })

    it.only('should not be able to create an appointment with overlapping dates', () => {
        const sut = new CreateAppointment(
            new InMemoryAppointmentRepository()
        ) // System Under Test

        const customer = {
            name: 'John Smith',
            email: 'john.smith@email.com'
        }

        sut.execute({
            customer,
            startsAt: getFutureYear('2022-09-26'),
            endsAt: getFutureYear('2022-09-28'),
        })

        sut.execute({
            customer,
            startsAt: getFutureYear('2022-09-27'),
            endsAt: getFutureYear('2022-09-28'),
        })
        .then(console.log)
        .catch(console.error)


        // expect(sut.execute({
        //     customer,
        //     startsAt: getFutureYear('2022-09-27'),
        //     endsAt: getFutureYear('2022-09-28'),
        // })).rejects.toBeInstanceOf(Error)
    })
})
