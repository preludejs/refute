import { ok, fail, type Refute } from './prelude.js'

/** @returns refute for `true` value. */
const true_: Refute<true> =
  (value: unknown) =>
    value === true ?
      ok(true as const) :
      fail(value, 'expected true')

export default true_
