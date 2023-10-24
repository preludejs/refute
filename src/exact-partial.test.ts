import * as $ from './index.js'

test('exact partial', () => {
  expect($.exactPartial({})({})).toEqual($.ok({}))
  expect($.exactPartial({})(undefined)).toEqual($.fail(undefined, 'expected object'))
  expect($.exactPartial({})({ a: 1 })).toEqual($.fail({ a: 1 }, 'unexpected key a'))
  expect($.exactPartial({ a: $.number })({ a: 1 })).toEqual($.ok({ a: 1 }))
  expect($.exactPartial({ a: $.number })({ a: '1' })).toEqual($.fail('1', 'at key a, expected number'))
  expect($.exactPartial({ a: $.number })({ a: undefined })).toEqual($.ok({ a: undefined }))
})
