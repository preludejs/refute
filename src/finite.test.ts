import * as $ from './index.js'

test('finite', () => {
  expect($.finite(1)).toEqual([1, undefined])
  expect($.finite(Infinity)).toEqual([Infinity, 'expected finite number'])
  expect($.finite(NaN)).toEqual([NaN, 'expected finite number'])
})
