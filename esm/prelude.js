export const parameter0 = '@prelude/refute:parameter0';
/** @returns success result. */
export const ok = (value) => [value, undefined];
/** @returns failure result. */
export const fail = (value, reason) => [value, reason];
/** @returns `true` if provided `result` is failure, `false` otherwise. */
export const failed = (result) => typeof result[1] === 'string';
/** Wraps failure with provided `reason` prefix. */
export const refail = (failure, reason) => fail(failure[0], `${reason}, ${failure[1]}`);
export const nest = (reason) => (a) => (value) => {
    const r = a(value);
    return failed(r) ?
        refail(r, reason) :
        r;
};
/** @return failure reason without interpolating value. */
export const failureReason = (failure) => `Invalid value ${failure[1]}.`;
/** @returns failure reason. */
export const unsafeFailureReason = (failure) => `Invalid value ${failure[1]}, got ${failure[0]}.`;
//# sourceMappingURL=prelude.js.map