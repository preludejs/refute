import * as $ from './index.js'

test('false', () => {
  expect($.false(false)).toEqual([false, undefined])
  expect($.false(true)).toEqual([true, 'expected false'])
})
