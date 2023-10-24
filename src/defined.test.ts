import * as $ from './index.js'

test('defined', () => {
  expect($.defined(1)).toEqual($.ok(1))
  expect($.defined(undefined)).toEqual($.fail(undefined, 'expected defined'))
})
