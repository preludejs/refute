import { ok, fail, type Result } from './prelude.js'

/** @returns refute for defined value type. */
const defined =
  <T>(value: T): Result<Exclude<T, undefined>> =>
    typeof value === 'undefined' ?
      fail(value, 'expected defined') :
      ok(value as Exclude<T, undefined>)

export default defined
