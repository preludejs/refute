import * as $ from './index.js'

test('bigint', () => {
  expect($.bigint(0n)).toEqual($.ok(0n))
  expect($.bigint(1)).toEqual($.fail(1, 'expected bigint'))
})
