import * as $ from './index.js'

test('lt', () => {
  expect($.lt(1)(0)).toEqual($.ok(0))
  expect($.lt(1)(1)).toEqual($.fail(1, 'expected lower than 1'))
})
