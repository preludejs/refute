import { ok, fail, failed, refail, type Refute, type Result, type Primitive } from './prelude.js'

/** @returns confirmation of an unique array. */
const unique =
  <T>(a: Refute<T>, f?: (value: T) => Primitive) =>
    (values: unknown): Result<T[]> => {
      if (!Array.isArray(values)) {
        return fail(values, 'expected array')
      }
      const set = new Set
      for (let i = 0; i < values.length; i++) {
        const value = values[i]
        const refute = a(value)
        if (failed(refute)) {
          return refail(refute, `at index ${i}`)
        }
        const key = f ? f(value) : value
        if (set.has(key)) {
          return fail(value, `duplicate value at index ${i}`)
        }
        set.add(key)
      }
      return ok(values)
    }

export default unique
