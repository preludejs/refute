import { ok, fail, type Refute } from './prelude.js'

/** @returns refute for `symbol` type. */
const symbol_: Refute<symbol> =
  (value: unknown) =>
    typeof value === 'symbol' ?
      ok(value) :
      fail(value, 'expected symbol')

export default symbol_
