import { ok, fail, failed, refail } from './prelude.js';
/** Combinator over an array. */
const array = (a) => (values) => {
    if (!Array.isArray(values)) {
        return fail(values, 'expected array');
    }
    for (let i = 0; i < values.length; i++) {
        const r = a(values[i]);
        if (failed(r)) {
            return refail(r, `at index ${i}`);
        }
    }
    return ok(values);
};
export default array;
//# sourceMappingURL=array.js.map