import { ok, fail, type Refute } from './index.js'

export const between =
  (min: number, max: number): Refute<number> =>
    value =>
      typeof value === 'number' && value >= min && value <= max ?
        ok(value) :
        fail(value, `expected number between ${min} and ${max}`)

export default between
