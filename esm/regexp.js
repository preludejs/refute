import { ok, fail } from './prelude.js';
const regexp = (re) => (value) => typeof value !== 'string' ?
    fail(value, 'expected string') :
    !value.match(re) ?
        fail(value, `expected ${value} to match ${re}.`) :
        ok(value);
export default regexp;
//# sourceMappingURL=regexp.js.map