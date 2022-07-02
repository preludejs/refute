/// <reference types="./undefined.d.ts" />
import { ok, fail } from './prelude.js';
/** @returns refute for `undefined` type. */
const undefined_ = (value) => value === undefined ?
    ok(value) :
    fail(value, 'expected undefined');
export default undefined_;
//# sourceMappingURL=undefined.js.map