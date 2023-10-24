import * as $ from './index.js'

test('gt', () => {
  expect($.gt(1)(2)).toEqual($.ok(2))
  expect($.gt(1)(1)).toEqual($.fail(1, 'expected greater than 1'))
})
