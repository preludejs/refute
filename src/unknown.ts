import { ok } from './prelude.js'

/**
 * A refute function that accepts any value and returns a success result.
 * This is useful as a base case or when you want to accept any value.
 * @param value - Any value
 * @returns A success result containing the provided value
 */
const unknown_ =
  (value: unknown) =>
    ok(value)

export default unknown_
