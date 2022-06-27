import { failed, failureReason } from './prelude.js';
/** Combinator returning refute as assertion. */
const assert = (a) => (value) => {
    const r = a(value);
    if (failed(r)) {
        throw new TypeError(failureReason(r));
    }
    return value;
};
export default assert;
//# sourceMappingURL=assert.js.map