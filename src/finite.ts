import { ok, fail, type Result } from './prelude.js'

/** @returns failure if `value` is not a finite number. */
const finite =
  (value: unknown): Result<number> =>
    typeof value !== 'number' || !Number.isFinite(value) ?
      fail(value, 'expected finite number') :
      ok(value)

export default finite
