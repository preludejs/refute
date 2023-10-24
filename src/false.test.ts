import * as $ from './index.js'

test('false', () => {
  expect($.false(false)).toEqual($.ok(false))
  expect($.false(true)).toEqual($.fail(true, 'expected false'))
})
