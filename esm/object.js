/// <reference types="./object.d.ts" />
import { ok, fail, refail, failed } from './prelude.js';
import lift from './lift.js';
/**
 * Refute combinator over an inexact object.
 *
 * @see partial
 * @see exact
 * @see exactPartial
 */
const object_ = (kvs) => (value) => {
    if (typeof value !== 'object' || value === null) {
        return fail(value, 'expected object');
    }
    for (const k in kvs) {
        const v = value[k];
        const r = lift(kvs[k])(v);
        if (failed(r)) {
            return refail(r, `at key ${k}`);
        }
    }
    return ok(value);
};
export default object_;
//# sourceMappingURL=object.js.map