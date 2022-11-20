import * as $ from './index.js'

const range = $.exact({
  from: $.calendarDate,
  to: $.calendarDate
})

test('not a string', () => {
  expect(range({ from: 1, to: 2 })).toEqual([1, 'at key from, expected string'])
})

test('valid', () => {
  expect(range(JSON.parse('{"from":"2001-01-01","to":"2001-01-02"}'))).toEqual([{
    from: '2001-01-01',
    to: '2001-01-02'
  }, undefined])
})

test('not valid date string', () => {
  expect($.safeReason(range)(JSON.parse('{"from":"2001-01-01","to":"today"}'))).toEqual(
    'Invalid value at key to, expected YYYY-MM-DD string.'
  )
})

test('not a valid date', () => {
  expect($.safeReason(range)(JSON.parse('{"from":"2001-01-01","to":"2001-13-01"}'))).toEqual(
    'Invalid value at key to, expected valid date.'
  )
})
