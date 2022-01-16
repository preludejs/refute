import { ok, fail, type Primitive, type Refute } from './prelude.js'

/** @returns failure if value doesn't strictly equal any of provided `values`. */
const oneOf =
  <T extends Primitive>(...values: readonly T[]): Refute<T> =>
    (value: unknown) => {
      for (const value_ of values) {
        if (value_ === value) {
          return ok(value as T)
        }
      }
      return fail(value, `none of ${values.map(String).join(', ')} matched`)
    }

export default oneOf
