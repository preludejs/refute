import { ok, fail, type Refute } from './prelude.js'

const regexp =
  (re: RegExp): Refute<string> =>
    (value: unknown) =>
      typeof value !== 'string' ?
        fail(value, 'expected string') :
        !value.match(re) ?
          fail(value, `expected to match ${re}.`) :
          ok(value)

export default regexp
