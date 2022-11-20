import * as $ from './index.js'

test('boolean', () => {
  expect($.boolean(true)).toEqual([true, undefined])
  expect($.boolean(false)).toEqual([false, undefined])
  expect($.boolean(0)).toEqual([0, 'expected boolean'])
})
