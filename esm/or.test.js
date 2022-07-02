/// <reference types="./or.test.d.ts" />
import * as $ from './index.js';
test('or', () => {
    const f = $.or($.number, 'ABC', $.object({ foo: 1 }));
    expect(() => $.assert(f)({})).toThrow('Invalid value where none of 3 alternatives matched.');
    expect($.assert(f)('ABC')).toBe('ABC');
    expect($.assert(f)(42)).toBe(42);
    expect($.assert(f)({ foo: 1 })).toEqual({ foo: 1 });
});
//# sourceMappingURL=or.test.js.map