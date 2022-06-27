import { type Primitive, type Refute, type Result, type Lifted } from './prelude.js';
declare const partial: <T extends Record<string, Primitive | Refute<unknown>>>(kvs: T) => (value: unknown) => Result<{ [k in keyof T]?: Lifted<T[k]> | undefined; }>;
export default partial;
