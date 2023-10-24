import { ok, fail, type Refute } from './prelude.js'

/** @returns ok if value is number, failure otherwise. */
const number_: Refute<number> =
  (value: unknown) =>
    typeof value === 'number' ?
      ok(value) :
      fail(value, 'expected number')

export default number_
