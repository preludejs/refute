import { failed } from './prelude.js';
/** Combinator returning refute result as predicate. */
const predicate = (a) => (value) => !failed(a(value));
export default predicate;
//# sourceMappingURL=predicate.js.map