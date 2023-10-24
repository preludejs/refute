import * as $ from './index.js'

test('unique', () => {
  expect($.unique($.string)(null)).toEqual($.fail(null, 'expected array'))
  expect($.unique($.string)([])).toEqual($.ok([]))
  expect($.unique($.string)(['a'])).toEqual($.ok(['a']))
  expect($.unique($.string)(['a', 'a'])).toEqual($.fail('a', 'duplicate value at index 1'))
  expect($.unique($.string)(['a', 'b'])).toEqual($.ok(['a', 'b']))
  expect($.unique($.string)(['a', 'b', 'a'])).toEqual($.fail('a', 'duplicate value at index 2'))
  expect($.unique($.string)(['a', 'b', 1])).toEqual($.fail(1, 'at index 2, expected string'))
  expect($.unique($.string, String)(['a', 'b', 1])).toEqual($.fail(1, 'at index 2, expected string'))
})
