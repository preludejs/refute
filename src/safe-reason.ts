import { reasonWithoutReceived, failed, type Refute } from './prelude.js'

/** Combinator returning refute reason without interpolating value or `undefined`. */
export const safeReason =
  <T>(a: Refute<T>) =>
    (value: unknown): undefined | string => {
      const r = a(value)
      return failed(r) ?
        reasonWithoutReceived(r) :
        undefined
    }

export default safeReason
