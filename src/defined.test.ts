import * as $ from './index.js'

test('defined', () => {
  expect($.defined(1)).toEqual([1, undefined])
  expect($.defined(undefined)).toEqual([undefined, 'expected defined'])
})
