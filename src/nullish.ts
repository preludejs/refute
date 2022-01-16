import { ok, fail, type Refute } from './prelude.js'

/** @returns failure if `value` is not nullish (undefined or null). */
const nullish: Refute<undefined | null> =
  (value: unknown) =>
    value == null ?
      ok(value) :
      fail(value, 'expected nullish')

export default nullish
