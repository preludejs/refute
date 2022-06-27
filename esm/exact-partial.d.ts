import { type Primitive, type Refute, type Result, type Lifted } from './prelude.js';
/**
 * Refute combinator over an exact, partial object.
 *
 * @see object
 * @see partial
 * @see exact
 */
declare const exactPartial: <T extends Record<string, Primitive | Refute<unknown>>>(kvs: T) => (value: unknown) => Result<{ [k in keyof T]?: Lifted<T[k]> | undefined; }>;
export default exactPartial;
