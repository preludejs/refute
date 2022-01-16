import { ok, fail, type Refute } from './prelude.js'

/** @returns confirms safe integer. */
const safeInteger: Refute<number> =
  (value: unknown) =>
    typeof value === 'number' && Number.isSafeInteger(value) ?
      ok(value) :
      fail(value, 'expected safe integer')

export default safeInteger
