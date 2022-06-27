import { ok, fail } from './prelude.js';
/** @returns refute for `null` type. */
const null_ = (value) => value === null ?
    ok(null) :
    fail(value, 'expected null');
export default null_;
//# sourceMappingURL=null.js.map