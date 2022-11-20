import * as $ from './index.js'

test('partial', () => {
  expect($.partial({ a: $.number })(null)).toEqual([null, 'expected object'])
  expect($.partial({ a: $.number })({})).toEqual([{}, undefined])
  expect($.partial({ a: $.number })({ b: 1 })).toEqual([{ b: 1 }, undefined])
  expect($.partial({ a: $.number })({ a: '1' })).toEqual(['1', 'at key a, expected number'])
  expect($.partial({ a: $.number })({ a: 1, b: 2 })).toEqual([{ a: 1, b: 2 }, undefined])
})
