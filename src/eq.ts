import { ok, fail, type Refute } from './index.js'

const eq =
  <T>(a: T): Refute<T> =>
    (value: unknown) =>
      value === a ?
        ok(value as T) :
        fail(value, `expected ${a}`)

export default eq
