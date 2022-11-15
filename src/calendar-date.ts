import { ok, fail, type Refute } from './prelude.js'

const re = /^\d{4}-\d{2}-\d{2}$/

const calendarDate: Refute<string> =
  (value: unknown) => {
    if (typeof value !== 'string') {
      return fail(value, 'expected string')
    }
    if (!value.match(re)) {
      return fail(value, 'expected YYYY-MM-DD string')
    }
    if (isNaN(new Date(value).getTime())) {
      return fail(value, 'expected valid date')
    }
    return ok(value)
  }

export default calendarDate
