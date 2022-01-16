import { ok, fail, type Refute, type Constructor } from './prelude.js'

const instance =
  <T extends Constructor>(class_: T): Refute<InstanceType<T>> =>
    (value: unknown) =>
      value instanceof class_ ?
        ok(value as InstanceType<T>) :
        fail(value, `not an instance of ${class_}`)

export default instance
