import { fail, failed, type Result, type Refute, type Lifted, type Primitive } from './prelude.js'
import object_ from './object.js'

/**
 * Refute combinator over an exact object.
 * @see object
 */
const exact =
  <T extends Record<string, Primitive | Refute<unknown>>>(kvs: T) =>
    (value: unknown): Result<{ [k in keyof T]: Lifted<T[k]> }> => {
      const r = object_(kvs)(value)
      if (failed(r)) {
        return r
      }
      const keys = Object
        .keys(value as object)
        .filter(_ => !(_ in kvs))
      if (keys.length > 0) {
        const keys_ = keys.length === 1 ? 'key' : 'keys'
        return fail(value, `has unexpected extra ${keys_} ${keys.map(String).join(', ')}`)
      }
      return r
    }

export default exact
