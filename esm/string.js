/// <reference types="./string.d.ts" />
import { ok, fail } from './prelude.js';
/** @returns refute for `string` type. */
const string_ = (value) => typeof value === 'string' ?
    ok(value) :
    fail(value, 'expected string');
export default string_;
//# sourceMappingURL=string.js.map