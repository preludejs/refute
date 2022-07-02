/// <reference types="./bigint.d.ts" />
import { ok, fail } from './prelude.js';
/** @returns refute for `bigint` type. */
const bigint_ = (value) => typeof value === 'bigint' ?
    ok(value) :
    fail(value, 'expected bigint');
export default bigint_;
//# sourceMappingURL=bigint.js.map