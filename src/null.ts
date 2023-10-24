import { ok, fail, type Refute } from './prelude.js'

/** @returns ok if value is `null`, failure otherwise. */
const null_: Refute<null> =
  (value: unknown) =>
    value === null ?
      ok(null) :
      fail(value, 'expected null')

export default null_
