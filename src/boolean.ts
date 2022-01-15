import { ok, fail, type Refute } from './prelude.js'

/** @returns refute for `boolean` type. */
const boolean_: Refute<boolean> =
  (value: unknown) =>
    typeof value === 'boolean' ?
      ok(value) :
      fail(value, 'expected boolean')

export default boolean_
