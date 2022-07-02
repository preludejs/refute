import { type Refute } from './prelude.js';
/** Combinator returning refute result as predicate. */
declare const predicate: <T>(a: Refute<T>) => (value: unknown) => value is T;
export default predicate;
