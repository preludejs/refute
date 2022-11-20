import * as $ from './index.js'

test('exact', () => {
  expect($.exact({})(null)).toEqual([null, 'expected object'])
})

test('single extra key', () => {
  expect($.safeReason($.exact({ foo: 'FOO', bar: 'BAR' }))({ foo: 'FOO', bar: 'BAR', baz: 'BAZ' }))
    .toEqual('Invalid value has unexpected extra key baz.')
})

test('multiple extra keys', () => {
  expect($.safeReason($.exact({ foo: 'FOO', bar: 'BAR' }))({ foo: 'FOO', bar: 'BAR', baz: 'BAZ', aux: 'AUX' }))
    .toEqual('Invalid value has unexpected extra keys baz, aux.')
})
