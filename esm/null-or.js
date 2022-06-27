import { ok, nest } from './prelude.js';
const nullOr = (a) => (value) => value === null ?
    ok(value) :
    nest('was not null')(a)(value);
export default nullOr;
//# sourceMappingURL=null-or.js.map