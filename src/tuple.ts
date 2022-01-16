import { ok, fail, refail, failed, type Refute, type Refuted } from './prelude.js'

const tuple =
  <T extends [...Refute<unknown>[]]>(...as: T): Refute<{ [I in keyof T]: Refuted<T[I]> }> =>
    (value: unknown) => {
      if (!Array.isArray(value)) {
        return fail(value, 'expected tuple')
      }
      if (value.length > as.length) {
        return fail(value, `expected tuple length of not more than ${as.length}`)
      }
      for (let i = 0; i < value.length; i++) {
        const r = as[i](value[i])
        if (failed(r)) {
          return refail(r, `tuple entry at index ${i}`)
        }
      }
      return ok(value as { [I in keyof T]: Refuted<T[I]> })
    }

export default tuple
