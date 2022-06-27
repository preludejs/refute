import { type Refute } from './prelude.js';
/** Combinator returning refute reason without interpolating value or `undefined`. */
export declare const safeReason: <T>(a: Refute<T>) => (value: unknown) => undefined | string;
export default safeReason;
