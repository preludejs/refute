import * as $ from './index.js'

test('record', () => {
  expect($.record($.string, $.number)(null)).toEqual([null, 'expected object'])
  expect($.record($.string, $.number)({})).toEqual([{}, undefined])
  expect($.record($.string, $.number)({ a: 1 })).toEqual([{ a: 1 }, undefined])
  expect($.record($.string, $.number)({ a: '1' })).toEqual(['1', 'at key a, expected number'])
  expect($.record($.regexp(/^[a-z]+$/), $.number)({ a1: '1' })).toEqual(['a1', 'key, expected to match /^[a-z]+$/.'])
})
