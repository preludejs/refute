import { failed, type Refute } from './prelude.js'

/** Combinator returning refute result as predicate. */
const predicate =
  <T>(a: Refute<T>) =>
    (value: unknown): value is T =>
      !failed(a(value))

export default predicate
