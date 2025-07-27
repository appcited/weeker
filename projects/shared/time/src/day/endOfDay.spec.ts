import { expect, it } from "vitest"

import { endOfDay } from "./endOfDay"
import { zonedDateTime } from "#src/zoned-date-time/zonedDateTime.ts";

const testCases = [
  {
    description: "should handle date-time in Europe/Berlin timezone",
    dateTime: zonedDateTime("2024-09-04T08:00:00[Europe/Berlin]"),
    expected: zonedDateTime("2024-09-05T00:00:00+02:00[Europe/Berlin]"),
  },
  {
    description: "should handle date-time in America/New_York timezone",
    dateTime: zonedDateTime("2024-09-04T08:00:00[America/New_York]"),
    expected: zonedDateTime("2024-09-05T00:00:00-04:00[America/New_York]"),
  },
  {
    description: "should handle midnight in Europe/Berlin timezone",
    dateTime: zonedDateTime("2024-09-04T00:00:00[Europe/Berlin]"),
    expected: zonedDateTime("2024-09-05T00:00:00+02:00[Europe/Berlin]"),
  },
  {
    description: "should handle leap year date-time in Europe/Berlin timezone",
    dateTime: zonedDateTime("2024-02-29T12:00:00[Europe/Berlin]"),
    expected: zonedDateTime("2024-03-01T00:00:00+01:00[Europe/Berlin]"),
  },
] as const;

it.each(testCases)("$description", (testCase) => {
  const result = endOfDay(testCase.dateTime)

  expect(result).toStrictEqual(testCase.expected)
})
