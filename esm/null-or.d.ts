import { type Refute } from './prelude.js';
declare const nullOr: <T>(a: Refute<T>) => Refute<T | null>;
export default nullOr;
