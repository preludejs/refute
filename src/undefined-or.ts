import { ok, nest, type Refute } from './prelude.js'

const undefinedOr =
  <T>(a: Refute<T>): Refute<undefined | T> =>
    (value: unknown) =>
      value === undefined ?
        ok(value) :
        nest<T>('was defined')(a)(value)

export default undefinedOr
