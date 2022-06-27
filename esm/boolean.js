import { ok, fail } from './prelude.js';
/** @returns refute for `boolean` type. */
const boolean_ = (value) => typeof value === 'boolean' ?
    ok(value) :
    fail(value, 'expected boolean');
export default boolean_;
//# sourceMappingURL=boolean.js.map