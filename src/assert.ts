import { failed, reasonWithReceived, type Refute } from './prelude.js'

/** Combinator returning refute as assertion. */
const assert =
  <T>(a: Refute<T>, f = reasonWithReceived) =>
    (value: unknown): T => {
      const r = a(value)
      if (failed(r)) {
        throw new TypeError(f(r))
      }
      return value as T
    }

export default assert
