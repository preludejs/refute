/// <reference types="./safe-reason.d.ts" />
import { failureReason, failed } from './prelude.js';
/** Combinator returning refute reason without interpolating value or `undefined`. */
export const safeReason = (a) => (value) => {
    const r = a(value);
    return failed(r) ?
        failureReason(r) :
        undefined;
};
export default safeReason;
//# sourceMappingURL=safe-reason.js.map