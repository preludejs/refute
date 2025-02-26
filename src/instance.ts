import { ok, fail, type Refute, type Constructor } from './prelude.js'

/**
 * Creates a refute function that checks if a value is an instance of the specified class.
 * @param class_ - The constructor to check instances against
 * @returns A refute function that validates if a value is an instance of the specified class
 */
const instance =
  <T extends Constructor>(class_: T): Refute<InstanceType<T>> =>
    (value: unknown) =>
      value instanceof class_ ?
        ok(value as InstanceType<T>) :
        fail(value, `not an instance of ${class_}`)

export default instance
