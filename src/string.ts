import { ok, fail, type Refute } from './prelude.js'

/** @returns refute for `string` type. */
const string_: Refute<string> =
  (value: unknown) =>
    typeof value === 'string' ?
      ok(value) :
      fail(value, 'expected string')

export default string_
