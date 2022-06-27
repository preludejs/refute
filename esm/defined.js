import { ok, fail } from './prelude.js';
/** @returns refute for defined value type. */
const defined = (value) => typeof value === 'undefined' ?
    fail(value, 'expected defined') :
    ok(value);
export default defined;
//# sourceMappingURL=defined.js.map