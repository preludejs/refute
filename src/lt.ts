import { ok, fail, type Refute } from './index.js'

/** 
 * Creates a refute function that checks if a value is less than the specified number.
 * @param than - The number to compare against
 * @returns A refute function that validates if a value is less than the specified number
 */
export const lt =
  (than: number): Refute<number> =>
    value =>
      typeof value === 'number' && value < than ?
        ok(value) :
        fail(value, `expected less than ${than}`)

export default lt
