import * as $ from './index.js'

test('lte', () => {
  expect($.lte(1)(0)).toEqual($.ok(0))
  expect($.lte(1)(1)).toEqual($.ok(1))
  expect($.lte(1)(2)).toEqual($.fail(2, 'expected lower than or equal to 1'))
})
