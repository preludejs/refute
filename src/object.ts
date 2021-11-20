import { ok, fail, failed, refail, type Result, type Refute, type Refuted } from './prelude.js'

/**
 * Refute combinator over an object.
 * @see exact
 */
const object_ =
  <T extends Record<string, Refute<unknown>>>(kvs: T) =>
    (value: unknown): Result<{ [k in keyof T]: Refuted<T[k]> }> => {
      if (typeof value !== 'object' || value === null) {
        return fail(value, 'expected object')
      }
      for (const k in kvs) {
        const r = kvs[k](value[k as keyof typeof value])
        if (failed(r)) {
          return refail(r, `at key ${k}`)
        }
      }
      return ok(value as { [k in keyof T]: Refuted<T[k]> })
    }

export default object_
