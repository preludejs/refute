import * as $ from './index.js'

test('finite', () => {
  expect($.finite(1)).toEqual($.ok(1))
  expect($.finite(Infinity)).toEqual($.fail(Infinity, 'expected finite number'))
  expect($.finite(NaN)).toEqual($.fail(NaN, 'expected finite number'))
})
