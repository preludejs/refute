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
        const k = f ? f(values[i]) : values[i]
        if (set.has(k)) {
          return fail(values, `duplicate value at index ${i}`)
        }
        set.add(k)
        const r = a(values[i])
        if (failed(r)) {
          return refail(r, `at index ${i}`)
        }
      }
      return ok(values)
    }

export default unique
