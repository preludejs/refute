import { type Primitive, type Refute, type Result, type Lifted } from './prelude.js';
/**
 * Refute combinator over an exact object.
 *
 * @see object
 * @see partial
 * @see exactPartial
 */
declare const exact: <T extends Record<string, Primitive | Refute<unknown>>>(kvs: T) => (value: unknown) => Result<{ [k in keyof T]: Lifted<T[k]>; }>;
export default exact;
