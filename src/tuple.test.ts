import * as $ from './index.js'

test('tuple', () => {
  expect($.tuple($.number, $.string)(null)).toEqual([null, 'expected array'])
  expect($.tuple($.number, $.string)([1, 'a'])).toEqual([[1, 'a'], undefined])
  expect($.tuple($.number, $.string)([1, 2])).toEqual([2, 'at index 1, expected string'])
  expect($.tuple($.number, $.string)([1, 'a', false])).toEqual([[1, 'a', false], 'expected array not longer than 2'])
})
