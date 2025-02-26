import { ok, fail, type Refute } from './prelude.js'

/**
 * Creates a refute function that validates if a value is a string that matches the provided regular expression.
 * @param re - The regular expression to match against
 * @returns A refute function that validates if a value is a string that matches the provided regular expression
 */
const regexp =
  (re: RegExp): Refute<string> =>
    (value: unknown) =>
      typeof value !== 'string' ?
        fail(value, 'expected string') :
        !value.match(re) ?
          fail(value, `expected to match ${re}.`) :
          ok(value)

export default regexp
