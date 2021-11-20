import { ok, fail, failed, refail, type Refute, type Result } from './prelude.js'

/** Combinator over an array. */
const array =
  <T>(a: Refute<T>) =>
    (value: unknown): Result<T[]> => {
      if (!Array.isArray(value)) {
        return fail(value, 'expected array')
      }
      for (let i = 0; i < value.length; i++) {
        const r = a(value[i])
        if (failed(r)) {
          return refail(r, `at index ${i}`)
        }
      }
      return ok(value)
    }

export default array
