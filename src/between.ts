import { ok, fail, type Refute } from './index.js'

/**
 * Creates a refute function that checks if a value is a number between the specified minimum and maximum values (inclusive).
 * @param min - The minimum acceptable value (inclusive)
 * @param max - The maximum acceptable value (inclusive)
 * @returns A refute function that validates if a value is a number within the specified range
 */
export const between =
  (min: number, max: number): Refute<number> =>
    value =>
      typeof value === 'number' && value >= min && value <= max ?
        ok(value) :
        fail(value, `expected number between ${min} and ${max}`)

export default between
