import { expect, it } from "vitest"
import { defaultComparator } from "#src/compare/defaultComparator.ts"

import { splitIntervalBy } from "./splitIntervalBy"

const testCases = [
  {
    description: "should handle empty interval",
    interval: { start: 0, end: 0 },
    expected: [{ start: 0, end: 0 }],
  },
  {
    description: "should handle interval smaller than nextEndFn step",
    interval: { start: 0, end: 1 },
    expected: [{ start: 0, end: 1 }],
  },
  {
    description: "should handle interval equal to nextEndFn step",
    interval: { start: 0, end: 2 },
    expected: [{ start: 0, end: 2 }],
  },
  {
    description: "should handle interval larger than nextEndFn step",
    interval: { start: 0, end: 3 },
    expected: [{ start: 0, end: 2 }, { start: 2, end: 3 }],
  },
] as const

const nextEndFn = (i: number) => i + 2

it.each(testCases)(
  "$description",
  ({ interval, expected }) => {
    const intervalGenerator = splitIntervalBy(defaultComparator)(nextEndFn)(interval)
    expect([...intervalGenerator]).toStrictEqual(expected)
  },
)
