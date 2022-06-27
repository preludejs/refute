import { ok, fail } from './prelude.js';
/** @returns failure if `value` is not nullish (undefined or null). */
const nullish = (value) => value == null ?
    ok(value) :
    fail(value, 'expected nullish');
export default nullish;
//# sourceMappingURL=nullish.js.map