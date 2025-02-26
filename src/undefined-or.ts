import { ok, nest, type Refute } from './prelude.js'

/**
 * Creates a refute function that validates if a value is either undefined or satisfies the provided refute function.
 * @param a - The refute function to use when the value is not undefined
 * @returns A refute function that validates if a value is undefined or satisfies the provided refute function
 */
const undefinedOr =
  <T>(a: Refute<T>): Refute<undefined | T> =>
    (value: unknown) =>
      value === undefined ?
        ok(value) :
        nest<T>('was defined')(a)(value)

export default undefinedOr
