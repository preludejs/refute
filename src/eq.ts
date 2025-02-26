import { ok, fail, type Refute } from './index.js'

/**
 * Creates a refute function that checks if a value strictly equals the specified value.
 * @param a - The value to compare against
 * @returns A refute function that validates if a value strictly equals the specified value
 */
const eq =
  <T>(a: T): Refute<T> =>
    (value: unknown) =>
      value === a ?
        ok(value as T) :
        fail(value, `expected ${a}`)

export default eq
