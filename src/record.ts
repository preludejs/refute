import { ok, fail, failed, refail, type Refute, type Result } from './prelude.js'

const record =
  <K extends string | symbol | number, V>(k: Refute<K>, v: Refute<V>): Refute<Record<K, V>> =>
    (value: unknown) => {
      if (typeof value !== 'object' || value === null) {
        return fail(value, 'expected object')
      }
      let r: Result<unknown>
      for (const entry of Object.entries(value)) {
        r = k(entry[0])
        if (failed(r)) {
          return refail(r, 'key')
        }
        r = v(entry[1])
        if (failed(r)) {
          return refail(r, `at key ${entry[0]}`)
        }
      }
      return ok(value as Record<K, V>)
    }

export default record
