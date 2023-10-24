import { ok, fail, type Refute } from './index.js'

const lte =
  (than: number): Refute<number> =>
    value =>
      typeof value === 'number' && value <= than ?
        ok(value) :
        fail(value, `expected lower than or equal to ${than}`)

export default lte
