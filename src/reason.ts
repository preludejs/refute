import { failed, reasonWithReceived, type Refute } from './prelude.js'

/** Combinator returning refute reason or `undefined`. */
const reason =
  <T>(a: Refute<T>, f = reasonWithReceived) =>
    (value: unknown): undefined | string => {
      const r = a(value)
      return failed(r) ?
        f(r) :
        undefined
    }

export default reason
