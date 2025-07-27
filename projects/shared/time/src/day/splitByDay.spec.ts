import { expect, it } from "vitest"

import { zonedDateTime } from "../zoned-date-time"
import { splitByDay } from "./splitByDay"

const testCases = [
  {
    description: "should handle empty interval",
    interval: {
      start: zonedDateTime("2024-09-04T00:00:00[Europe/Berlin]"),
      end: zonedDateTime("2024-09-04T00:00:00[Europe/Berlin]"),
    },
    expected: [
      {
        start: zonedDateTime("2024-09-04T00:00:00[Europe/Berlin]"),
        end: zonedDateTime("2024-09-04T00:00:00[Europe/Berlin]"),
      },
    ],
  },
  {
    description: "should handle interval shorter than a day",
    interval: {
      start: zonedDateTime("2024-09-04T08:00:00[Europe/Berlin]"),
      end: zonedDateTime("2024-09-04T12:00:00[Europe/Berlin]"),
    },
    expected: [
      {
        start: zonedDateTime("2024-09-04T08:00:00[Europe/Berlin]"),
        end: zonedDateTime("2024-09-04T12:00:00[Europe/Berlin]"),
      },
    ],
  },
  {
    description: "should handle interval equal to one day",
    interval: {
      start: zonedDateTime("2024-09-04T00:00:00[Europe/Berlin]"),
      end: zonedDateTime("2024-09-05T00:00:00[Europe/Berlin]"),
    },
    expected: [
      {
        start: zonedDateTime("2024-09-04T00:00:00[Europe/Berlin]"),
        end: zonedDateTime("2024-09-05T00:00:00[Europe/Berlin]"),
      },
    ],
  },
  {
    description: "should handle interval spanning multiple days",
    interval: {
      start: zonedDateTime("2024-09-04T08:00:00[Europe/Berlin]"),
      end: zonedDateTime("2024-09-06T12:00:00[Europe/Berlin]"),
    },
    expected: [
      {
        start: zonedDateTime("2024-09-04T08:00:00[Europe/Berlin]"),
        end: zonedDateTime("2024-09-05T00:00:00[Europe/Berlin]"),
      },
      {
        start: zonedDateTime("2024-09-05T00:00:00[Europe/Berlin]"),
        end: zonedDateTime("2024-09-06T00:00:00[Europe/Berlin]"),
      },
      {
        start: zonedDateTime("2024-09-06T00:00:00[Europe/Berlin]"),
        end: zonedDateTime("2024-09-06T12:00:00[Europe/Berlin]"),
      },
    ],
  },
] as const

it.each(testCases)(
  "$description",
  ({ interval, expected }) => {
    const result = [...splitByDay(interval)]
    expect(result).toStrictEqual(expected)
  },
)
