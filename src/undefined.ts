import { ok, fail, type Refute } from './prelude.js'

/** @returns refute for `undefined` type. */
const undefined_: Refute<undefined> =
  (value: unknown) =>
    value === undefined ?
      ok(value) :
      fail(value, 'expected undefined')

export default undefined_
