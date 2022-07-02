/// <reference types="./undefined-or.d.ts" />
import { ok, nest } from './prelude.js';
const undefinedOr = (a) => (value) => value === undefined ?
    ok(value) :
    nest('was defined')(a)(value);
export default undefinedOr;
//# sourceMappingURL=undefined-or.js.map