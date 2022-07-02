/// <reference types="./or.d.ts" />
import { ok, fail, failed } from './prelude.js';
import lift from './lift.js';
const or = (...as) => (value) => {
    for (const a of as) {
        const r = lift(a)(value);
        if (!failed(r)) {
            return ok(value);
        }
    }
    return fail(value, `where none of ${as.length} alternatives matched`);
};
export default or;
//# sourceMappingURL=or.js.map