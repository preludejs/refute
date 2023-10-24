import * as $ from './index.js'

test('partial', () => {
  expect($.partial({ a: $.number })(null)).toEqual($.fail(null, 'expected object'))
  expect($.partial({ a: $.number })({})).toEqual($.ok({}))
  expect($.partial({ a: $.number })({ b: 1 })).toEqual($.ok({ b: 1 }))
  expect($.partial({ a: $.number })({ a: '1' })).toEqual($.fail('1', 'at key a, expected number'))
  expect($.partial({ a: $.number })({ a: 1, b: 2 })).toEqual($.ok({ a: 1, b: 2 }))
})
