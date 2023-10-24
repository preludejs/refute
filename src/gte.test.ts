import * as $ from './index.js'

test('gte', () => {
  expect($.gte(1)(2)).toEqual($.ok(2))
  expect($.gte(1)(1)).toEqual($.ok(1))
  expect($.gte(1)(0)).toEqual($.fail(0, 'expected greater than or equal to 1'))
})
