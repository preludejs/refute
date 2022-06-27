import type { Refute, Primitive, Lifted } from './prelude.js';
declare const lift: <T extends Primitive | Refute<unknown>>(a: T) => Refute<Lifted<T>>;
export default lift;
