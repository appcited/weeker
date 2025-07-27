import { curry } from "#src/fp/curry.ts"
import type { Comparator } from "../compare/Comparator"
import type { Interval } from "./Interval.ts"

/**
 * Splits an interval by a comparator and a nextEndFn
 *
 * @template T - The type of values in the interval
 *
 * @param comparator - A function that compares two values of type T
 * @param nextEndFn - A function that calculates the next end value based on a given start value
 * @param interval - An object containing the start and end values of the interval
 *
 * @returns An iterator that yields the splitted intervals
 */
function* _splitIntervalBy<T>(
  comparator: Comparator<T>,
  nextEndFn: (value: T) => T,
  { start, end }: Interval<T>,
) {
  let currentStart = start

  while (true) {
    const nextEnd = nextEndFn(currentStart)
    if (comparator(nextEnd, end) >= 0) {
      yield { start: currentStart, end }
      break
    }
    yield { start: currentStart, end: nextEnd }
    currentStart = nextEnd
  }
}

export const splitIntervalBy = curry(_splitIntervalBy)
