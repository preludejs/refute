import { ok, fail, refail, failed, type Primitive, type Refute, type Result, type Lifted } from './prelude.js'
import lift from './lift.js'

/**
 * Refute combinator over an exact, partial object.
 *
 * @see object
 * @see partial
 * @see exact
 */
const exactPartial =
  <T extends Record<string, Primitive | Refute<unknown>>>(kvs: T) =>
    (value: unknown): Result<{ [k in keyof T]?: undefined | Lifted<T[k]> }> => {
      if (typeof value !== 'object' || value === null) {
        return fail(value, 'expected object')
      }
      for (const k in kvs) {
        const v = value[k as keyof typeof value]

        // Skip partial.
        if (v === undefined) {
          continue
        }

        const r = lift(kvs[k])(v)
        if (failed(r)) {
          return refail(r, `at key ${k}`)
        }
      }

      // Confirm exactness.
      for (const key of Object.keys(value)) {
        if (key in kvs) {
          continue
        }
        return fail(value, `unexpected key ${key}`)
      }

      return ok(value as { [k in keyof T]?: undefined | Lifted<T[k]> })
    }

export default exactPartial
