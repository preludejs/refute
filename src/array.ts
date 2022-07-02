import { ok, fail, failed, refail, type Refute, type Result } from './prelude.js'
import unknown_ from './unknown.js'

/** Combinator over an array. */
const array =
  <T>(a: Refute<T>) =>
    (values: unknown): Result<T[]> => {
      if (!Array.isArray(values)) {
        return fail(values, 'expected array')
      }
      if (a === unknown_) {
        return ok(values)
      }
      for (let i = 0; i < values.length; i++) {
        const r = a(values[i])
        if (failed(r)) {
          return refail(r, `at index ${i}`)
        }
      }
      return ok(values)
    }

export default array
