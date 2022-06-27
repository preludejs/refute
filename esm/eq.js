import { ok, fail } from './index.js';
const eq = (a) => (value) => value === a ?
    ok(value) :
    fail(value, `expected ${a}`);
export default eq;
//# sourceMappingURL=eq.js.map