import { ok, nest, type Refute } from './prelude.js'

/**
 * Creates a refute function that validates if a value is either nullish (null or undefined) or satisfies the provided refute function.
 * @param a - The refute function to use when the value is not nullish
 * @returns A refute function that validates if a value is nullish or satisfies the provided refute function
 */
const nullishOr =
  <T>(a: Refute<T>): Refute<undefined | null | T> =>
    (value: unknown) =>
      value == null ?
        ok(value) :
        nest<T>('was not nullish')(a)(value)

export default nullishOr
