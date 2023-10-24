import * as $ from './index.js'

test('record', () => {
  expect($.record($.string, $.number)(null)).toEqual($.fail(null, 'expected object'))
  expect($.record($.string, $.number)({})).toEqual($.ok({}))
  expect($.record($.string, $.number)({ a: 1 })).toEqual($.ok({ a: 1 }))
  expect($.record($.string, $.number)({ a: '1' })).toEqual($.fail('1', 'at key a, expected number'))
  expect($.record($.regexp(/^[a-z]+$/), $.number)({ a1: '1' })).toEqual($.fail('a1', 'key, expected to match /^[a-z]+$/.'))
})
