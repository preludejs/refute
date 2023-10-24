import { ok, fail, type Refute } from './index.js'

const gt =
  (than: number): Refute<number> =>
    value =>
      typeof value === 'number' && value > than ?
        ok(value) :
        fail(value, `expected greater than ${than}`)

export default gt
