import { ok, fail, type Refute } from './index.js'

const gte =
  (than: number): Refute<number> =>
    value =>
      typeof value === 'number' && value >= than ?
        ok(value) :
        fail(value, `expected greater than or equal to ${than}`)

export default gte
