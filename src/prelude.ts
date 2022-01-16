export type Ok<T> = [ value: T, reason: undefined ]

export type Fail = [ value: unknown, reason: string ]

export type Result<T> = Ok<T> | Fail

export type Refute<T> = (value: unknown) => Result<T>

export type Refuted<P> = P extends Refute<infer U> ? U : never

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

export type Lifted<T> = T extends Refute<infer U> ?
  U :
  T extends Primitive ?
    T :
    never

export type IntersectionOfUnion<T> = (T extends unknown ? (_: T) => unknown : never) extends (_: infer R) => unknown ? R : never

export type Constructor = abstract new (...args: any) => any

export const parameter0 = '@prelude/refute:parameter0'

/** @returns success result. */
export const ok =
  <T>(value: T): Ok<T> =>
    [ value, undefined ]

/** @returns failure result. */
export const fail =
  (value: unknown, reason: string): Fail =>
    [ value, reason ]

/** @returns `true` if provided `result` is failure, `false` otherwise. */
export const failed =
  (result: Result<unknown>): result is Fail =>
    typeof result[1] === 'string'

/** Wraps failure with provided `reason` prefix. */
export const refail =
  (failure: Fail, reason: string): Fail =>
    fail(failure[0], `${reason}, ${failure[1]}`)

export const nest =
  <T>(reason: string) =>
    (a: Refute<T>): Refute<T> =>
      (value: unknown) => {
        const r = a(value)
        return failed(r) ?
          refail(r, reason) :
          r
      }

/** @return failure reason without interpolating value. */
export const failureReason =
  (failure: Fail): string =>
    `Invalid value ${failure[1]}.`

/** @returns failure reason. */
export const unsafeFailureReason =
  (failure: Fail): string =>
    `Invalid value ${failure[1]}, got ${failure[0]}.`
