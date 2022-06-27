import { type Primitive, type Refute } from './prelude.js';
/** @returns failure if value doesn't strictly equal any of provided `values`. */
declare const oneOf: <T extends Primitive>(...values: readonly T[]) => Refute<T>;
export default oneOf;
