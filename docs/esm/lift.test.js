/// <reference types="./lift.test.d.ts" />
import * as $ from './index.js';
test('lift', () => {
    const refute = $.object({
        str: 'a',
        one: 1,
        t: true,
        f: false
    });
    expect($.reason(refute)({})).toEqual('Invalid value at key str, expected a.');
    expect($.reason(refute)({ str: 'a' })).toEqual('Invalid value at key one, expected 1.');
    expect($.reason(refute)({ str: 'a', one: 1 })).toEqual('Invalid value at key t, expected true.');
    expect($.reason(refute)({ str: 'a', one: 1, t: true })).toEqual('Invalid value at key f, expected false.');
    expect($.reason(refute)({ str: 'a', one: 1, t: true, f: false })).toEqual(undefined);
});
//# sourceMappingURL=lift.test.js.map