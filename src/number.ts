import { ok, fail, type Refute } from './prelude.js'

/** @returns refute for `number` type. */
const number_: Refute<number> =
  (value: unknown) =>
    typeof value === 'number' ?
      ok(value) :
      fail(value, 'expected number')

export default number_
