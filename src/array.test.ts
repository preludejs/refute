import * as $ from './index.js'

test('array', () => {
  expect($.array($.unknown)({})).toEqual([{}, "expected array"])
  expect($.array($.unknown)([])).toEqual([[], undefined])
  expect($.array($.number)([1, 2, 3])).toEqual([[1, 2, 3], undefined])
  expect($.array($.number)([1, '2', 3])).toEqual(['2', 'at index 1, expected number'])
})
