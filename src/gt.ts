import { ok, fail, type Refute } from './index.js'

/**
 * Creates a refute function that checks if a value is greater than the specified number.
 * @param than - The number to compare against
 * @returns A refute function that validates if a value is greater than the specified number
 */
const gt =
  (than: number): Refute<number> =>
    value =>
      typeof value === 'number' && value > than ?
        ok(value) :
        fail(value, `expected greater than ${than}`)

export default gt
