import { ok, fail, type Refute } from './prelude.js'

/** @returns refute for `bigint` type. */
const bigint_: Refute<bigint> =
  (value: unknown) =>
    typeof value === 'bigint' ?
      ok(value) :
      fail(value, 'expected bigint')

export default bigint_
