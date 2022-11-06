import { setYear, parseISO } from 'date-fns'

/**
 * @param date in format "Y-m-d" like '2022-09-26' and must return '2023-09-26'
 */
export function getFutureYear (date: string, addYears = 1): Date {
    const dated = parseISO(date)
    const newYear = dated.getUTCFullYear() + addYears

    return setYear(dated, newYear)
}


export default {
    getFutureYear
}
