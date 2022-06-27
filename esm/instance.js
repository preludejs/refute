import { ok, fail } from './prelude.js';
const instance = (class_) => (value) => value instanceof class_ ?
    ok(value) :
    fail(value, `not an instance of ${class_}`);
export default instance;
//# sourceMappingURL=instance.js.map