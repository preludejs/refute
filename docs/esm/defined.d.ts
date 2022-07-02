import { type Result } from './prelude.js';
/** @returns refute for defined value type. */
declare const defined: <T>(value: T) => Result<Exclude<T, undefined>>;
export default defined;
