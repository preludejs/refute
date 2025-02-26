import { ok, fail, refail, failed, type Refute, type Refuted } from './prelude.js'

/**
 * Creates a refute function that validates a tuple (fixed-length array) with specific types for each position.
 * @param as - Array of refute functions, one for each position in the tuple
 * @returns A refute function that validates if a value is a tuple with elements matching the specified types
 */
const tuple =
  <T extends [...Refute<unknown>[]]>(...as: T): Refute<{ [I in keyof T]: Refuted<T[I]> }> =>
    (value: unknown) => {
      if (!Array.isArray(value)) {
        return fail(value, 'expected array')
      }
      if (value.length > as.length) {
        return fail(value, `expected array not longer than ${as.length}`)
      }

      // Allow shorter arrays in case tail is optional.

      for (let i = 0; i < value.length; i++) {
        const r = as[i](value[i])
        if (failed(r)) {
          return refail(r, `at index ${i}`)
        }
      }
      return ok(value as { [I in keyof T]: Refuted<T[I]> })
    }

export default tuple
