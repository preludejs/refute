import { ok, fail } from './prelude.js';
/** @returns confirms safe integer. */
const safeInteger = (value) => typeof value === 'number' && Number.isSafeInteger(value) ?
    ok(value) :
    fail(value, 'expected safe integer');
export default safeInteger;
//# sourceMappingURL=safe-integer.js.map