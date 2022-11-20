import * as $ from './index.js'

test('bigint', () => {
  expect($.bigint(0n)).toEqual([0n, undefined])
  expect($.bigint(1)).toEqual([1, 'expected bigint'])
})
