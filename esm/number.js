import { ok, fail } from './prelude.js';
/** @returns refute for `number` type. */
const number_ = (value) => typeof value === 'number' ?
    ok(value) :
    fail(value, 'expected number');
export default number_;
//# sourceMappingURL=number.js.map