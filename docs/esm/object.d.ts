import { type Primitive, type Refute, type Result, type Lifted } from './prelude.js';
/**
 * Refute combinator over an inexact object.
 *
 * @see partial
 * @see exact
 * @see exactPartial
 */
declare const object_: <T extends Record<string, Primitive | Refute<unknown>>>(kvs: T) => (value: unknown) => Result<{ [k in keyof T]: Lifted<T[k]>; }>;
export default object_;
