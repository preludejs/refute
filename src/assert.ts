import { failed, failureReason, type Refute } from './prelude.js'

/** Combinator returning refute as assertion. */
const assert =
  <T>(a: Refute<T>) =>
    (value: unknown): T => {
      const r = a(value)
      if (failed(r)) {
        throw new TypeError(failureReason(r))
      }
      return value as T
    }

export default assert
