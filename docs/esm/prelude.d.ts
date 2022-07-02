export declare type Ok<T> = [value: T, reason: undefined];
export declare type Fail = [value: unknown, reason: string];
export declare type Result<T> = Ok<T> | Fail;
export declare type Refute<T> = (value: unknown) => Result<T>;
export declare type Refuted<P> = P extends Refute<infer U> ? U : never;
export declare type Primitive = undefined | null | false | true | number | bigint | string | symbol | RegExp;
export declare type Lifted<T> = T extends Refute<infer U> ? U : T extends Primitive ? T : never;
export declare type IntersectionOfUnion<T> = (T extends unknown ? (_: T) => unknown : never) extends (_: infer R) => unknown ? R : never;
export declare type Constructor = abstract new (...args: any) => any;
export declare const parameter0 = "@prelude/refute:parameter0";
/** @returns success result. */
export declare const ok: <T>(value: T) => Ok<T>;
/** @returns failure result. */
export declare const fail: (value: unknown, reason: string) => Fail;
/** @returns `true` if provided `result` is failure, `false` otherwise. */
export declare const failed: (result: Result<unknown>) => result is Fail;
/** Wraps failure with provided `reason` prefix. */
export declare const refail: (failure: Fail, reason: string) => Fail;
export declare const nest: <T>(reason: string) => (a: Refute<T>) => Refute<T>;
/** @return failure reason without interpolating value. */
export declare const failureReason: (failure: Fail) => string;
/** @returns failure reason. */
export declare const unsafeFailureReason: (failure: Fail) => string;
