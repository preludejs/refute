import { type Result } from './prelude.js';
/** @returns failure if `value` is not a finite number. */
declare const finite: (value: unknown) => Result<number>;
export default finite;
