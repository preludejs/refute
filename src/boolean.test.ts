import * as $ from './index.js'

test('boolean', () => {
  expect($.boolean(true)).toEqual($.ok(true))
  expect($.boolean(false)).toEqual($.ok(false))
  expect($.boolean(0)).toEqual($.fail(0, 'expected boolean'))
})
