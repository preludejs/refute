import { type Primitive, type Refute, type Lifted } from './prelude.js';
declare const or: <Ts extends (Primitive | Refute<unknown>)[]>(...as: Ts) => Refute<Lifted<Ts[number]>>;
export default or;
