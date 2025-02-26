import { ok, failed, type Primitive, type Refute, type Lifted, type IntersectionOfUnion } from './prelude.js'
import lift from './lift.js'

/**
 * Creates a refute function that combines multiple refute functions with logical AND.
 * All refute functions must pass for the value to be valid.
 * @param as - Array of refute functions or primitive values to test against
 * @returns A refute function that validates if a value passes all provided conditions
 */
const and =
  <Ts extends (Primitive | Refute<unknown>)[]>(...as: Ts): Refute<IntersectionOfUnion<Lifted<Ts[number]>>> =>
    (value: unknown) => {
      for (const a of as) {
        const r = lift(a)(value)
        if (failed(r)) {
          return r
        }
      }
      return ok(value as IntersectionOfUnion<Lifted<Ts[number]>>)
    }

export default and
