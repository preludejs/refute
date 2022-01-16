import { ok, fail, failed, type Primitive, type Refute, type Lifted } from './prelude.js'
import lift from './lift.js'

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
