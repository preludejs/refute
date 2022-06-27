import { ok, fail } from './prelude.js';
/** @returns failure if `value` is not a finite number. */
const finite = (value) => typeof value !== 'number' || !Number.isFinite(value) ?
    fail(value, 'expected finite number') :
    ok(value);
export default finite;
//# sourceMappingURL=finite.js.map