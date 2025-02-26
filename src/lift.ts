import type { Refute, Primitive, Lifted } from './prelude.js'
import eq from './eq.js'
import null_ from './null.js'
import regexp from './regexp.js'

/**
 * Lifts a primitive value or refute function to a refute function.
 * For primitive values, creates an equality check refute;
 * For refute functions, passes them through unchanged.
 * @param a - The primitive value or refute function to lift
 * @returns A refute function that validates against the provided value or using the provided function
 */
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
        throw new TypeError(`Can't lift ${a}.`)
      }
      default:
        throw new TypeError(`Can't lift ${a as any}.`)
    }
  }

export default lift
