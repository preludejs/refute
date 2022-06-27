import { ok, fail, refail, failed } from './prelude.js';
const tuple = (...as) => (value) => {
    if (!Array.isArray(value)) {
        return fail(value, 'expected tuple');
    }
    if (value.length > as.length) {
        return fail(value, `expected tuple length of not more than ${as.length}`);
    }
    for (let i = 0; i < value.length; i++) {
        const r = as[i](value[i]);
        if (failed(r)) {
            return refail(r, `tuple entry at index ${i}`);
        }
    }
    return ok(value);
};
export default tuple;
//# sourceMappingURL=tuple.js.map