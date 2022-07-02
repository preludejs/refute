import { type Primitive, type Refute, type Lifted, type IntersectionOfUnion } from './prelude.js';
declare const and: <Ts extends (Primitive | Refute<unknown>)[]>(...as: Ts) => Refute<IntersectionOfUnion<Lifted<Ts[number]>>>;
export default and;
