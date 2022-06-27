import eq from './eq.js';
import null_ from './null.js';
import regexp from './regexp.js';
const lift = (a) => {
    switch (typeof a) {
        case 'function':
            return a;
        case 'string':
        case 'number':
        case 'boolean':
        case 'undefined':
        case 'bigint':
        case 'symbol':
            return eq(a);
        case 'object': {
            if (a === null) {
                return null_;
            }
            if (a instanceof RegExp) {
                return regexp(a);
            }
            throw new TypeError('Can\'t lift ${value}.');
        }
        default:
            throw new TypeError('Can\'t lift ${value}.');
    }
};
export default lift;
//# sourceMappingURL=lift.js.map