import * as $ from './index.js'

test('lift', () => {

  const refute = $.object({
    str: 'a' as const,
    one: 1 as const,
    t: true as const,
    f: false as const
  })

  expect($.reason(refute)({})).toEqual('Invalid value at key str, expected a, got undefined.')
  expect($.reason(refute)({ str: 'a' })).toEqual('Invalid value at key one, expected 1, got undefined.')
  expect($.reason(refute)({ str: 'a', one: 1 })).toEqual('Invalid value at key t, expected true, got undefined.')
  expect($.reason(refute)({ str: 'a', one: 1, t: true })).toEqual('Invalid value at key f, expected false, got undefined.')
  expect($.reason(refute)({ str: 'a', one: 1, t: true, f: false })).toEqual(undefined)

})
