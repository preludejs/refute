import { type Refute, type Refuted } from './prelude.js';
declare const tuple: <T extends Refute<unknown>[]>(...as: T) => Refute<{ [I in keyof T]: Refuted<T[I]>; }>;
export default tuple;
