import { type Refute, type Result } from './prelude.js';
/** Combinator over an array. */
declare const array: <T>(a: Refute<T>) => (values: unknown) => Result<T[]>;
export default array;
