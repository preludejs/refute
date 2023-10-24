![@prelude/refute](https://shields.io/npm/v/@prelude/refute)
![esm cjs](https://img.shields.io/badge/module-esm%20cjs-f39f37)
[![deno](https://img.shields.io/badge/deno-f39f37)](https://raw.githubusercontent.com/preludejs/refute/master/esm/index.js)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=preludejs_refute&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=preludejs_refute)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=preludejs_refute&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=preludejs_refute)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=preludejs_refute&metric=bugs)](https://sonarcloud.io/summary/new_code?id=preludejs_refute)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=preludejs_refute&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=preludejs_refute)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=preludejs_refute&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=preludejs_refute)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=preludejs_refute&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=preludejs_refute)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=preludejs_refute&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=preludejs_refute)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=preludejs_refute&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=preludejs_refute)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=preludejs_refute&metric=coverage)](https://sonarcloud.io/summary/new_code?id=preludejs_refute)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=preludejs_refute&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=preludejs_refute)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=preludejs_refute&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=preludejs_refute)

---

# Refute module

* `and: <Ts extends (Primitive | Refute<unknown>)[]>(...as: Ts) => Refute<IntersectionOfUnion<Lifted<Ts[number]>>>`

* `array: <T>(a: Refute<T>) => (values: unknown) => Result<T[]>`

  Combinator over an array.

* `assert: <T>(a: Refute<T>) => (value: unknown) => T`

  Combinator returning refute as assertion.

* `bigint: Refute<bigint>`

  Returns refute for `bigint` type.

* `boolean: Refute<boolean>`

  Returns refute for `boolean` type.

* `defined: <T>(value: T) => Result<Exclude<T, undefined>>`

  Returns refute for defined value type.

* `exact: <T extends Record<string, Primitive | Refute<unknown>>>(kvs: T) => (value: unknown) => Result<{ [k in keyof T]: Lifted<T[k]>; }>`

  Refute combinator over an exact object.

  See `object`

  See `partial`

  See `exactPartial`

* `exactPartial: <T extends Record<string, Primitive | Refute<unknown>>>(kvs: T) => (value: unknown) => Result<{ [k in keyof T]?: Lifted<T[k]>; }>`

  Refute combinator over an exact, partial object.

  See `object`

  See `partial`

  See `exact`

* `finite: (value: unknown) => Result<number>`

  Returns failure if `value` is not a finite number.

* `lift: <T extends Primitive | Refute<unknown>>(a: T) => Refute<Lifted<T>>`

* `null: Refute<null>`

  Returns refute for `null` type.

* `nullishOr: <T>(a: Refute<T>) => Refute<T>`

* `nullOr: <T>(a: Refute<T>) => Refute<T>`

* `number: Refute<number>`

  Returns refute for `number` type.

* `object: <T extends Record<string, Primitive | Refute<unknown>>>(kvs: T) => (value: unknown) => Result<{ [k in keyof T]: Lifted<T[k]>; }>`

  Refute combinator over an inexact object.

  See `partial`

  See `exact

  See `exactPartial`

* `oneOf: <T extends Primitive>(...values: readonly T[]) => Refute<T>`

  Returns failure if value doesn't strictly equal any of provided `values`.

* `or: <Ts extends (Primitive | Refute<unknown>)[]>(...as: Ts) => Refute<Lifted<Ts[number]>>`

* `partial: <T extends Record<string, Primitive | Refute<unknown>>>(kvs: T) => (value: unknown) => Result<{ [k in keyof T]?: Lifted<T[k]>; }>`

* `positive: Refute<number>`

  Returns confirms positive number.

* `predicate: <T>(a: Refute<T>) => (value: unknown) => value is T`

  Combinator returning refute result as predicate.

* `reason: <T>(a: Refute<T>) => (value: unknown) => string`

  Combinator returning refute reason or `undefined`.

* `record: <K extends string | number | symbol, V>(k: Refute<K>, v: Refute<V>) => Refute<Record<K, V>>`

* `regexp: (re: RegExp) => Refute<string>`

* `safeInteger: Refute<number>`

  Returns confirms safe integer.

* `safeReason: <T>(a: Refute<T>) => (value: unknown) => string`

  Combinator returning refute reason without interpolating value or `undefined`.

* `strftime: (f: string) => Refute<string>`

* `string: Refute<string>`

  Returns refute for `string` type.

* `symbol: Refute<symbol>`

  Returns refute for `symbol` type.

* `tuple: <T extends Refute<unknown>[]>(...as: T) => Refute<{ [I in keyof T]: Refuted<T[I]>; }>`

* `undefined: Refute<undefined>`

  Returns refute for `undefined` type.

* `undefinedOr: <T>(a: Refute<T>) => Refute<T>`

* `unique: <T>(a: Refute<T>, f?: (value: T) => Primitive) => (values: unknown) => Result<T[]>`

  Returns confirmation of an unique array.

# Usage

```bash
npm i -E @prelude/refute
```

```ts
import * as $ from '@prelude/refute'

const refute = $.object({
  foo: $.string,
  bar: $.number
})

const predicate = $.predicate(refute)

const assert = $.assert(refute)

const value = JSON.parse('...')
if (predicate(value)) {
  // value is { foo: string, bar: number }
}

const value_ = assert(value)
// value_ is { foo: string, bar: number }
// throws if not.

console.log($.reason(refute)({ bar: 'a' }))
// Invalid value at key bar, expected number, got a.
```

# License

```
MIT License

Copyright 2021 Mirek Rusin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
