import { ok, fail, failed, refail } from './prelude.js';
const record = (k, v) => (value) => {
    if (typeof value !== 'object' || value === null) {
        return fail(value, 'expected record');
    }
    let r;
    for (const entry of Object.entries(value)) {
        r = k(entry[0]);
        if (failed(r)) {
            return refail(r, 'key');
        }
        r = v(entry[1]);
        if (failed(r)) {
            return refail(r, `in ${entry[0]}`);
        }
    }
    return ok(value);
};
export default record;
//# sourceMappingURL=record.js.map