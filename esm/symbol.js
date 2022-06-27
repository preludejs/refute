import { ok, fail } from './prelude.js';
/** @returns refute for `symbol` type. */
const symbol_ = (value) => typeof value === 'symbol' ?
    ok(value) :
    fail(value, 'expected symbol');
export default symbol_;
//# sourceMappingURL=symbol.js.map