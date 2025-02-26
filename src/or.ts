import { ok, fail, failed, type Primitive, type Refute, type Lifted } from './prelude.js'
import lift from './lift.js'

/**
 * Creates a refute function that combines multiple refute functions with logical OR.
 * At least one refute function must pass for the value to be valid.
 * @param as - Array of refute functions or primitive values to test against
 * @returns A refute function that validates if a value passes at least one of the provided conditions
 */
const or =
  <Ts extends (Primitive | Refute<unknown>)[]>(...as: Ts): Refute<Lifted<Ts[number]>> =>
    (value: unknown) => {
      for (const a of as) {
        const r = lift(a)(value)
        if (!failed(r)) {
          return ok(value as Lifted<Ts[number]>)
        }
      }
      return fail(value, `where none of ${as.length} alternatives matched`)
    }

export default or
