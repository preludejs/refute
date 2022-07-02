import { type Refute } from './prelude.js';
declare const undefinedOr: <T>(a: Refute<T>) => Refute<T | undefined>;
export default undefinedOr;
