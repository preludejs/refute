import { ok, fail, type Refute } from './prelude.js'

/** @returns confirms positive number. */
const positive: Refute<number> =
  (value: unknown) =>
    typeof value === 'number' && value > 0 ?
      ok(value) :
      fail(value, 'expected positive number')

export default positive
