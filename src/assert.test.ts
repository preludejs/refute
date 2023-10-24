import * as $ from './index.js'

test('assert', () => {
  expect(() => $.assert($.number)('a')).toThrow('Invalid value expected number, got \'a\'.')
  expect(() => $.assert($.number, $.reasonWithoutReceived)('a')).toThrow('Invalid value expected number.')
})
