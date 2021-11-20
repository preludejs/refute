# Refute module

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

console.log($.reason(refute)({ foo: 'a' }))
// Invalid value at key foo, expected number, got a.
```

# License

```
MIT License

Copyright 2021 Mirek Rusin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
