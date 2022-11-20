import * as $ from './index.js'

test('exact partial', () => {
  expect($.exactPartial({})({})).toEqual([{}, undefined])
  expect($.exactPartial({})(undefined)).toEqual([undefined, 'expected object'])
  expect($.exactPartial({})({ a: 1 })).toEqual([{ a: 1 }, 'unexpected key a'])
  expect($.exactPartial({ a: $.number })({ a: 1 })).toEqual([{ a: 1 }, undefined])
  expect($.exactPartial({ a: $.number })({ a: '1' })).toEqual(['1', 'at key a, expected number'])
  expect($.exactPartial({ a: $.number })({ a: undefined })).toEqual([{ a: undefined }, undefined])
})
