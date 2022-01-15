import * as $ from './index.js'

test('lift', () => {

  const refute = $.object({
    str: 'a' as const,
    one: 1 as const,
    t: true as const,
    f: false as const
  })

  expect($.reason(refute)({})).toEqual('Invalid value at key str, expected string, got undefined.')
  expect($.reason(refute)({ str: 'a' })).toEqual('Invalid value at key one, expected number, got undefined.')
  expect($.reason(refute)({ str: 'a', one: 1 })).toEqual('Invalid value at key t, expected boolean, got undefined.')
  expect($.reason(refute)({ str: 'a', one: 1, t: true })).toEqual('Invalid value at key f, expected boolean, got undefined.')
  expect($.reason(refute)({ str: 'a', one: 1, t: true, f: false })).toEqual(undefined)

})
