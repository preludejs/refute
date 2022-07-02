/// <reference types="./nullish-or.d.ts" />
import { ok, nest } from './prelude.js';
const nullishOr = (a) => (value) => value == null ?
    ok(value) :
    nest('was not nullish')(a)(value);
export default nullishOr;
//# sourceMappingURL=nullish-or.js.map