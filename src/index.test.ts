import * as $ from './index.js'

test('basic', () => {

  const refute = $.object({
    foo: $.number,
    bar: $.string
  })

  expect($.reason(refute)({})).toEqual('Invalid value at key foo, expected number, got undefined.')
  expect($.reason(refute)({ foo: 1 })).toEqual('Invalid value at key bar, expected string, got undefined.')
  expect($.reason(refute)({ foo: 'a' })).toEqual('Invalid value at key foo, expected number, got a.')

  const predicate = $.predicate(refute)
  expect(predicate({})).toBe(false)
  expect(predicate({ foo: 1, bar: 'a' })).toBe(true)

  const assert = $.assert(refute)
  expect(() => assert({})).toThrow('Invalid value at key foo, expected number, got undefined.')
  expect(() => assert({ foo: 1, bar: 'a' })).not.toThrow()

})
