import { ok, fail, failed, refail, type Result, type Refute, type Lifted, type Primitive } from './prelude.js'
import lift from './lift.js'

/**
 * Refute combinator over an object.
 * @see exact
 */
const object_ =
  <T extends Record<string, Primitive | Refute<unknown>>>(kvs: T) =>
    (value: unknown): Result<{ [k in keyof T]: Lifted<T[k]> }> => {
      if (typeof value !== 'object' || value === null) {
        return fail(value, 'expected object')
      }
      for (const k in kvs) {
        const r = lift(kvs[k])(value[k as keyof typeof value])
        if (failed(r)) {
          return refail(r, `at key ${k}`)
        }
      }
      return ok(value as { [k in keyof T]: Lifted<T[k]> })
    }

export default object_
