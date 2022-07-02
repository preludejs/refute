/// <reference types="./reason.d.ts" />
import { failed, failureReason } from './prelude.js';
/** Combinator returning refute reason or `undefined`. */
const reason = (a) => (value) => {
    const r = a(value);
    return failed(r) ?
        failureReason(r) :
        undefined;
};
export default reason;
//# sourceMappingURL=reason.js.map