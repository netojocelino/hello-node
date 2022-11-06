import { expect, test } from 'vitest'
import { getFutureYear } from '../utils/get-date'

import Appointment from './Appointment'

test('Create an Appointment', () => {
    const customer = {
        name: 'John Smith',
        email: 'john.smith@email.com'
    }
    const startsAt = getFutureYear('2022-09-26')
    const endsAt = getFutureYear('2022-09-27')

    const appointment = new Appointment({
        customer,
        startsAt,
        endsAt,
    })

    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.customer.name).toEqual('John Smith')

})

test('Cannot create an appointment starts after end date', () => {

    const customer = {
        name: 'John Smith',
        email: 'john.smith@email.com'
    }
    const startsAt = getFutureYear('2022-09-27')
    const endsAt = getFutureYear('2022-09-26')

    const data = {
        customer,
        startsAt,
        endsAt,
    }

    expect(() => new Appointment(data)).toThrow()
})



test('Cannot create an appointment starts before now', () => {

    const customer = {
        name: 'John Smith',
        email: 'john.smith@email.com'
    }
    const startsAt = new Date()
    const endsAt = new Date()
    startsAt.setMinutes(startsAt.getMinutes() - 15)

    const data = {
        customer,
        startsAt,
        endsAt,
    }

    expect(() => new Appointment(data)).toThrow()
})
