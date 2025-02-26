import { ok, nest, type Refute } from './prelude.js'

/**
 * Creates a refute function that validates if a value is either null or satisfies the provided refute function.
 * @param a - The refute function to use when the value is not null
 * @returns A refute function that validates if a value is null or satisfies the provided refute function
 */
const nullOr =
  <T>(a: Refute<T>): Refute<null | T> =>
    (value: unknown) =>
      value === null ?
        ok(value) :
        nest<T>('was not null')(a)(value)

export default nullOr
