import bigint_ from './bigint.js'
import boolean_ from './boolean.js'
import null_ from './null.js'
import number_ from './number.js'
import regexp from './regexp.js'
import string_ from './string.js'
import symbol_ from './symbol.js'
import type { Refute, Primitive, Lifted } from './prelude.js'
import undefined_ from './undefined.js'

const lift =
  <T extends Primitive | Refute<unknown>>(value: T): Refute<Lifted<T>> => {
    switch (typeof value) {
      case 'function':
        return value as Refute<Lifted<T>>
      case 'string':
        return string_ as Refute<Lifted<T>>
      case 'number':
        return number_ as Refute<Lifted<T>>
      case 'boolean':
        return boolean_ as Refute<Lifted<T>>
      case 'undefined':
        return undefined_ as Refute<Lifted<T>>
      case 'bigint':
        return bigint_ as Refute<Lifted<T>>
      case 'symbol':
        return symbol_ as Refute<Lifted<T>>
      case 'object': {
        if (value === null) {
          return null_ as Refute<Lifted<T>>
        }
        if (value instanceof RegExp) {
          return regexp(value) as Refute<Lifted<T>>
        }
        throw new TypeError('Can\'t lift ${value}.')
      }
      default:
        throw new TypeError('Can\'t lift ${value}.')
    }
  }

export default lift
