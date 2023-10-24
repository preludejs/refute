import { ok, fail, failed, refail, type Refute, type Result } from './prelude.js'

const record =
  <K extends string | symbol | number, V>(k: Refute<K>, v: Refute<V>): Refute<Record<K, V>> =>
    (value: unknown) => {
      if (typeof value !== 'object' || value === null) {
        return fail(value, 'expected object')
      }
      let r: Result<unknown>
      for (const k_ in value) {
        r = k(k_)
        if (failed(r)) {
          return refail(r, 'key')
        }
        const v_ = value[k_]
        r = v(v_)
        if (failed(r)) {
          return refail(r, `at key ${k_}`)
        }
      }
      return ok(value as Record<K, V>)
    }

export default record
