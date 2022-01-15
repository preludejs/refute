import { ok, fail, type Refute, type Result } from './index.js'

const eq =
  <T>(a: T): Refute<T> =>
    (value: unknown) =>
      value === a ?
        ok(value) as Result<T> :
        fail(value, `expected ${a}`)

export default eq
