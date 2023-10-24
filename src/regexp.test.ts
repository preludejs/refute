import * as $ from './index.js'

test('regexp', () => {
  expect($.regexp(/^foo/dy)('foo')).toEqual($.ok('foo'))
})
