import { ok, failed } from './prelude.js';
import lift from './lift.js';
const and = (...as) => (value) => {
    for (const a of as) {
        const r = lift(a)(value);
        if (failed(r)) {
            return r;
        }
    }
    return ok(value);
};
export default and;
//# sourceMappingURL=and.js.map