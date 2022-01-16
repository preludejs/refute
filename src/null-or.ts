import { ok, nest, type Refute } from './prelude.js'

const nullOr =
  <T>(a: Refute<T>): Refute<null | T> =>
    (value: unknown) =>
      value === null ?
        ok(value) :
        nest<T>('was not null')(a)(value)

export default nullOr
