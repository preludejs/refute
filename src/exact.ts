import { ok, fail, refail, failed, type Primitive, type Refute, type Result, type Lifted } from './prelude.js'
import lift from './lift.js'

/**
 * Refute combinator over an exact object.
 *
 * @see object
 * @see partial
 * @see exactPartial
 */
const exact =
  <T extends Record<string, Primitive | Refute<unknown>>>(kvs: T) =>
    (value: unknown): Result<{ [k in keyof T]: Lifted<T[k]> }> => {
      if (typeof value !== 'object' || value === null) {
        return fail(value, 'expected object')
      }
      for (const k in kvs) {
        const v = value[k as keyof typeof value]
        const r = lift(kvs[k])(v)
        if (failed(r)) {
          return refail(r, `at key ${k}`)
        }
      }

      // Confirm exactness.
      const keys = Object
        .keys(value as object)
        .filter(_ => !(_ in kvs))
      if (keys.length > 0) {
        const keys_ = keys.length === 1 ? 'key' : 'keys'
        return fail(value, `has unexpected extra ${keys_} ${keys.map(String).join(', ')}`)
      }

      return ok(value as { [k in keyof T]: Lifted<T[k]> })
    }

export default exact
