import { type Refute, type Result, type Primitive } from './prelude.js';
/** @returns confirmation of an unique array. */
declare const unique: <T>(a: Refute<T>, f?: ((value: T) => Primitive) | undefined) => (values: unknown) => Result<T[]>;
export default unique;
