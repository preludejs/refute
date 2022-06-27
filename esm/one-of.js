import { ok, fail } from './prelude.js';
/** @returns failure if value doesn't strictly equal any of provided `values`. */
const oneOf = (...values) => (value) => {
    for (const value_ of values) {
        if (value_ === value) {
            return ok(value);
        }
    }
    return fail(value, `none of ${values.map(String).join(', ')} matched`);
};
export default oneOf;
//# sourceMappingURL=one-of.js.map