import { inspect } from 'node:util'

export type Ok<T> = {
  status: 'ok',
  value: T,
}

export type Fail = {
  status: 'refuted',
  reason: string,
  received: unknown
}

export type Result<T> =
  | Ok<T>
  | Fail

export type Refute<T> =
  (value: unknown) =>
    Result<T>

export type Refuted<P> =
  P extends Refute<infer U> ?
    U :
    never

export type Primitive =
  | undefined
  | null
  | false
  | true
  | number
  | bigint
  | string
  | symbol
  | RegExp

export type Lifted<T> =
  T extends Refute<infer U> ?
    U :
    T extends Primitive ?
      T :
      never

export type IntersectionOfUnion<T> =
  (T extends unknown ? (_: T) => unknown : never) extends (_: infer R) => unknown ? R : never

export type Constructor = abstract new (...args: any) => any

export const parameter0 = '@prelude/refute:parameter0'

/** @returns success result. */
export const ok =
  <T>(value: T): Ok<T> =>
    ({ status: 'ok' as const, value })

/** @returns failure result. */
export const fail =
  (received: unknown, reason: string): Fail =>
    ({ status: 'refuted' as const, received, reason })

/** @returns `true` if provided `result` is failure, `false` otherwise. */
export const failed =
  (result: Result<unknown>): result is Fail =>
    result.status === 'refuted'

/** Wraps failure with provided `reason` prefix. */
export const refail =
  (failure: Fail, reason: string): Fail =>
    fail(failure.received, `${reason}, ${failure.reason}`)

export const nest =
  <T>(reason: string) =>
    (a: Refute<T>): Refute<T> =>
      (value: unknown) => {
        const r = a(value)
        return failed(r) ?
          refail(r, reason) :
          r
      }

/** @return failure reason without inspecting received value. */
export const reasonWithoutReceived =
  (failure: Fail): string =>
    `Invalid value ${failure.reason}.`

/** @return failure reason with inspecting received value. */
export const reasonWithReceived =
  (failure: Fail): string =>
    `Invalid value ${failure.reason}, got ${inspect(failure.received)}.`
