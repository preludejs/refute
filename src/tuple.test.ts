import * as $ from './index.js'

test('tuple', () => {
  expect($.tuple($.number, $.string)(null)).toEqual($.fail(null, 'expected array'))
  expect($.tuple($.number, $.string)([1, 'a'])).toEqual($.ok([1, 'a']))
  expect($.tuple($.number, $.string)([1, 2])).toEqual($.fail(2, 'at index 1, expected string'))
  expect($.tuple($.number, $.string)([1, 'a', false])).toEqual($.fail([1, 'a', false], 'expected array not longer than 2'))
})
