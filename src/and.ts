import { ok, failed, type Primitive, type Refute, type Lifted, type Result, type IntersectionOfUnion } from './prelude.js'
import lift from './lift.js'

const and =
  <Ts extends (Primitive | Refute<unknown>)[]>(...as: Ts): Refute<IntersectionOfUnion<Lifted<Ts[number]>>> =>
    (value: unknown) => {
      for (const a of as) {
        const r = lift(a)(value)
        if (failed(r)) {
          return r
        }
      }
      return ok(value) as IntersectionOfUnion<Result<Lifted<Ts[number]>>>
    }

export default and
