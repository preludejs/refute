import { ok, fail, type Refute } from './prelude.js'

const map = {

  // Day
  a: /^(Sun|Mon|Tue|Wed|Thu|Fri|Sat)/,
  A: /^(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)/,
  d: /^(0[1-9]|[12][0-9]|3[01])/, // 01..31
  e: /^( [1-9]|[12][0-9]|3[01])/, // _1..31
  j: /^([0-2][0-9]{2}|3[0-5][0-9]|36[0-6])/,
  u: /^[1-7]/, // 1..7
  w: /^[0-6]/, // 0..6

  // Week
  U: /^(0[0-9]|[1-4][0-9]|5[0-3])/, // 00..53
  V: /^(0[1-9]|[1-4][0-9]|5[0-3])/, // 01..53
  W: /^(0[0-9]|[1-4][0-9]|5[0-3])/, // 00..53

  // Month
  b: /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/,
  B: /^(January|February|March|April|May|June|July|August|September|October|November|December)/,
  h: /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/,
  m: /^(0[1-9]|1[0-2])/, // 01..12

  // Year
  C: /^[0-9]{2}/, // 00..99
  g: /^[0-9]{2}/, // 00..99
  G: /^[0-9]{4}/, // 0000..9999
  y: /^[0-9]{2}/, // 00..99
  Y: /^[0-9]{4}/, // 0000..9999

  // Time
  H: /^(0[0-9]|1[0-9]|2[0-3])/, // 00..23
  k: /^( [0-9]|1[0-9]|2[0-3])/, // _0..23
  I: /^(0[1-9]|1[0-2])/, // 01..12
  l: /^( [1-9]|1[0-2])/, // _1..12
  M: /^[0-5][0-9]/, // 00..59
  p: /^(AM|PM)/,
  P: /^(am|pm)/,
  r: '%I:%M:%S %p',
  R: '%H:%M',
  S: /^[0-5][0-9]/,
  T: '%H:%M:%S',
  X: '%H:%M:%S',
  z: /^[+-][0-9]{4}/,
  Z: /^[A-Z]+/,

  // Time and Date Stamps
  // %c not supported.
  D: '%m/%d/%y',
  F: '%Y-%m-%d',
  s: /^[0-9]+/,
  // %x not supported.

  // Misc
  n: /^\n/,
  t: /^\t/
}

export type Token =
  | { type: 'regexp', value: RegExp }
  | { type: 'literal', value: string }

export const tokenize =
  (value: string): Token[] => {
    const tokens: Token[] = []
    let i = 0
    for (i = 0; i < value.length; i++) {
      if (value[i] !== '%') {
        tokens.push({ type: 'literal', value: value[i] })
        continue
      }
      if (value[i + 1] === '%') {
        tokens.push({ type: 'literal', value: '%' })
        i++
        continue
      }
      const r = map[value[i + 1] as keyof typeof map]
      if (!r) {
        throw new Error(`Unknown strftime rule %${value[i + 1]}.`)
      }
      if (typeof r === 'string') {
        for (const token of tokenize(r)) {
          tokens.push(token)
        }
      }
      if (r instanceof RegExp) {
        tokens.push({ type: 'regexp', value: r })
      }
      i++
    }
    return tokens
  }

const strftime =
  (f: string): Refute<string> => {
    const tokens = tokenize(f)
    return (value: unknown) => {
      if (typeof value !== 'string') {
        return fail(value, `expected string`)
      }
      let i = 0
      for (const token of tokens) {
        const value_ = value.slice(i)
        switch (token.type) {
          case 'regexp': {
            const m = value_.match(token.value)
            if (m) {
              i += m[0].length
            } else {
              return fail({ value, index: i }, `expected ${f} strftime, failed at index ${i}`)
            }
            break
          }
          case 'literal':
            if (!value_.startsWith(token.value)) {
              return fail({ value, index: i }, `expected ${f} strftime, failed at index ${i}`)
            }
            i += token.value.length
            break
        }
      }
      if (i !== value.length) {
        return fail({ value, index: i }, `expected ${f} strftime, failed at index ${i}`)
      }
      return ok(value)
    }
  }

export default strftime
