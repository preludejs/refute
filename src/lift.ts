import type { Refute, Primitive, Lifted } from './prelude.js'
import eq from './eq.js'
import null_ from './null.js'
import regexp from './regexp.js'

const lift =
  <T extends Primitive | Refute<unknown>>(a: T): Refute<Lifted<T>> => {
    switch (typeof a) {
      case 'function':
        return a as Refute<Lifted<T>>
      case 'string':
      case 'number':
      case 'boolean':
      case 'undefined':
      case 'bigint':
      case 'symbol':
        return eq(a) as Refute<Lifted<T>>
      case 'object': {
        if (a === null) {
          return null_ as Refute<Lifted<T>>
        }
        if (a instanceof RegExp) {
          return regexp(a) as Refute<Lifted<T>>
        }
        throw new TypeError('Can\'t lift ${value}.')
      }
      default:
        throw new TypeError('Can\'t lift ${value}.')
    }
  }

export default lift
