import { ok, fail, type Refute } from './prelude.js'

/** @returns refute for `false` value. */
const false_: Refute<false> =
  (value: unknown) =>
    value === false ?
      ok(false as const) :
      fail(value, 'expected false')

export default false_
