import { type Refute } from './prelude.js';
/** Combinator returning refute as assertion. */
declare const assert: <T>(a: Refute<T>) => (value: unknown) => T;
export default assert;
