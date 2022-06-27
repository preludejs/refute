import * as $ from './index.js';
test('and', () => {
    const f = $.and($.object({ foo: $.string, bar: $.string, baz: $.string }), $.object({ bar: $.string, baz: 'BAZ' }));
    expect($.safeReason(f)({ foo: 'FOO', bar: 'BAR', baz: 'BAZ' })).toBe(undefined);
    expect($.safeReason(f)({ foo: 'FOO', bar: 'BAR', baz: 'xyz' })).toBe('Invalid value at key baz, expected BAZ.');
});
//# sourceMappingURL=and.test.js.map