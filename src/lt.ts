import { ok, fail, type Refute } from './index.js'

const lt =
  (than: number): Refute<number> =>
    value =>
      typeof value === 'number' && value < than ?
        ok(value) :
        fail(value, `expected lower than ${than}`)

export default lt
