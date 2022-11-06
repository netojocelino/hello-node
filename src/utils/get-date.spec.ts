import { expect, test } from "vitest"
import { getFutureYear } from "./get-date"

test('increases date with one year', () => {
    const year = new Date().getFullYear()

    expect(getFutureYear(`${year}-09-26`).getFullYear()).toEqual(year + 1)
})
