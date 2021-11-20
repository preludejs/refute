import { failed, failureReason, type Refute } from './prelude.js'

/** Combinator returning refute reason or `undefined`. */
const reason =
  <T>(a: Refute<T>) =>
    (value: unknown): undefined | string => {
      const r = a(value)
      return failed(r) ?
        failureReason(r) :
        undefined
    }

export default reason
