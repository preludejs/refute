import { ok, nest, type Refute } from './prelude.js'

const nullishOr =
  <T>(a: Refute<T>): Refute<undefined | null | T> =>
    (value: unknown) =>
      value == null ?
        ok(value) :
        nest<T>('was not nullish')(a)(value)

export default nullishOr
