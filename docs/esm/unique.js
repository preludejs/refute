/// <reference types="./unique.d.ts" />
import { ok, fail, failed, refail } from './prelude.js';
/** @returns confirmation of an unique array. */
const unique = (a, f) => (values) => {
    if (!Array.isArray(values)) {
        return fail(values, 'expected array');
    }
    const set = new Set;
    for (let i = 0; i < values.length; i++) {
        const k = f ? f(values[i]) : values[i];
        if (set.has(k)) {
            return fail(values, `duplicate value at index ${i}`);
        }
        set.add(k);
        const r = a(values[i]);
        if (failed(r)) {
            return refail(r, `at index ${i}`);
        }
    }
    return ok(values);
};
export default unique;
//# sourceMappingURL=unique.js.map