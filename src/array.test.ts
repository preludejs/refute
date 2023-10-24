import * as $ from './index.js'

test('array', () => {
  expect($.array($.unknown)({})).toEqual($.fail({}, 'expected array'))
  expect($.array($.unknown)([])).toEqual($.ok([]))
  expect($.array($.number)([1, 2, 3])).toEqual($.ok([1, 2, 3]))
  expect($.array($.number)([1, '2', 3])).toEqual($.fail('2', 'at index 1, expected number'))
})
