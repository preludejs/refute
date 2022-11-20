import * as $ from './index.js'

test('unique', () => {
  expect($.unique($.string)(null)).toEqual([null, 'expected array'])
  expect($.unique($.string)([])).toEqual([[], undefined])
  expect($.unique($.string)(['a'])).toEqual([['a'], undefined])
  expect($.unique($.string)(['a', 'a'])).toEqual(['a', 'duplicate value at index 1'])
  expect($.unique($.string)(['a', 'b'])).toEqual([['a', 'b'], undefined])
  expect($.unique($.string)(['a', 'b', 'a'])).toEqual(['a', 'duplicate value at index 2'])
  expect($.unique($.string)(['a', 'b', 1])).toEqual([1, 'at index 2, expected string'])
  expect($.unique($.string, String)(['a', 'b', 1])).toEqual([1, 'at index 2, expected string'])
})
