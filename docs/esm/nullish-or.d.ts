import { type Refute } from './prelude.js';
declare const nullishOr: <T>(a: Refute<T>) => Refute<T | null | undefined>;
export default nullishOr;
