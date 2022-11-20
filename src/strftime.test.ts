import * as $ from './index.js'
import * as Strftime from './strftime.js'

test('tokenize', () => {
  expect(Strftime.tokenize('')).toEqual([])
  expect(Strftime.tokenize('%%')).toEqual([{ type: 'literal', value: '%' }])
  expect(Strftime.tokenize('abc%Tabc')).toEqual([
    { type: 'literal', value: 'a' },
    { type: 'literal', value: 'b' },
    { type: 'literal', value: 'c' },
    { type: 'regexp', value: /^(0[0-9]|1[0-9]|2[0-3])/ },
    { type: 'literal', value: ':' },
    { type: 'regexp', value: /^[0-5][0-9]/ },
    { type: 'literal', value: ':' },
    { type: 'regexp', value: /^[0-5][0-9]/ },
    { type: 'literal', value: 'a' },
    { type: 'literal', value: 'b' },
    { type: 'literal', value: 'c' }
  ])
})

test('strftime', () => {
  expect($.strftime('')('')).toEqual(['', undefined])
  expect($.strftime('')(null)).toEqual([null, 'expected string'])
  expect($.strftime('abc')('aaa')).toEqual([{ value: 'aaa', index: 1 }, 'expected abc strftime, failed at index 1'])
  expect(() => $.strftime('%Q')).toThrow('Unknown strftime rule %Q.')
  expect($.strftime('%Y-%m-%d')('2022-01-01')).toEqual(['2022-01-01', undefined])
  expect($.strftime('%Y-%m-%d')('2022-01-01a')).toEqual([{ value: '2022-01-01a', index: 10 }, 'expected %Y-%m-%d strftime, failed at index 10'])
  expect($.strftime('%Y-%m-%d')('22-01-01')).toEqual([{ value: '22-01-01', index: 0 }, 'expected %Y-%m-%d strftime, failed at index 0'])
  expect($.strftime('%T')('01:01:01')).toEqual(['01:01:01', undefined])
  expect($.strftime('%T')('25:01:01')).toEqual([{ value: '25:01:01', index: 0 }, 'expected %T strftime, failed at index 0'])
})
