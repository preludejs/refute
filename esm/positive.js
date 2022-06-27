import { ok, fail } from './prelude.js';
/** @returns confirms positive number. */
const positive = (value) => typeof value === 'number' && value > 0 ?
    ok(value) :
    fail(value, 'expected positive number');
export default positive;
//# sourceMappingURL=positive.js.map