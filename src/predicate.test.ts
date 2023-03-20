import * as $ from './index.js'

test('predicate', () => {
  const predicate = $.predicate($.tuple($.exact({
    email: $.nullishOr($.string),
    password: $.nullishOr($.string),
    token: $.nullishOr($.string),
    version: $.nullishOr($.string)
  })))
  expect(predicate([{ token: '123', 'version': '0.0.1' }])).toBe(true)
  expect(predicate({ token: '123', 'version': '0.0.1' })).toBe(false)
})
