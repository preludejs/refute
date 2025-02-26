import { ok, fail, refail, failed, type Primitive, type Refute, type Result, type Lifted } from './prelude.js'
import lift from './lift.js'

/**
 * Creates a refute function that validates if a value is an object with properties that optionally satisfy the provided refute functions.
 * Properties can be missing or undefined, and the validation will still pass.
 * @param kvs - An object mapping property names to refute functions or primitive values
 * @returns A refute function that validates if an object's properties satisfy the specified refute functions where present
 */
const partial =
  <T extends Record<string, Primitive | Refute<unknown>>>(kvs: T) =>
    (value: unknown): Result<{ [k in keyof T]?: undefined | Lifted<T[k]> }> => {
      if (typeof value !== 'object' || value === null) {
        return fail(value, 'expected object')
      }
      for (const k in kvs) {
        const v = value[k as keyof typeof value]

        // Maybe skip partial.
        if (v === undefined) {
          continue
        }

        const r = lift(kvs[k])(v)
        if (failed(r)) {
          return refail(r, `at key ${k}`)
        }
      }
      return ok(value as { [k in keyof T]?: undefined | Lifted<T[k]> })
    }

export default partial
