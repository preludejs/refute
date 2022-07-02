import { type Refute } from './prelude.js';
/** Combinator returning refute reason or `undefined`. */
declare const reason: <T>(a: Refute<T>) => (value: unknown) => undefined | string;
export default reason;
