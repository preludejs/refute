import * as $ from './index.js'

test('between', () => {
  expect($.between(1, 3)(2)).toEqual($.ok(2))
  expect($.between(1, 3)(1)).toEqual($.ok(1))
  expect($.between(1, 3)(3)).toEqual($.ok(3))
  expect($.between(1, 3)(0)).toEqual($.fail(0, 'expected number between 1 and 3'))
})
