import { ok, fail, refail, failed } from './prelude.js';
import lift from './lift.js';
const partial = (kvs) => (value) => {
    if (typeof value !== 'object' || value === null) {
        return fail(value, 'expected object');
    }
    for (const k in kvs) {
        const v = value[k];
        // Maybe skip partial.
        if (v === undefined) {
            continue;
        }
        const r = lift(kvs[k])(v);
        if (failed(r)) {
            return refail(r, `at key ${k}`);
        }
    }
    return ok(value);
};
export default partial;
//# sourceMappingURL=partial.js.map