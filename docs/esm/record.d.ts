import { type Refute } from './prelude.js';
declare const record: <K extends string | number | symbol, V>(k: Refute<K>, v: Refute<V>) => Refute<Record<K, V>>;
export default record;
