import * as $ from './index.js'

test('one-of', () => {
  expect($.oneOf('a', 'b')('a')).toEqual($.ok('a'))
  expect($.oneOf('a', 'b')('c')).toEqual($.fail('c', 'none of a, b matched'))
})
