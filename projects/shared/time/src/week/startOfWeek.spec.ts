import { expect, it } from "vitest"

import { startOfWeek } from "./startOfWeek"
import { zonedDateTime } from "#src/zoned-date-time/zonedDateTime.ts";

const testCases = [
  {
    description: "should handle Wednesday in Europe/Berlin timezone",
    dateTime: "2024-09-04T08:00:00[Europe/Berlin]",
    expected: "2024-09-02T00:00:00[Europe/Berlin]",
  },
  {
    description: "should handle Friday in America/New_York timezone",
    dateTime: "2024-09-06T15:30:00[America/New_York]",
    expected: "2024-09-02T00:00:00[America/New_York]",
  },
  {
    description: "should handle Monday (start of week) in Europe/Berlin timezone",
    dateTime: "2024-09-02T12:00:00[Europe/Berlin]",
    expected: "2024-09-02T00:00:00[Europe/Berlin]",
  },
  {
    description: "should handle Sunday (end of week) in Europe/Berlin timezone",
    dateTime: "2024-09-08T23:59:59[Europe/Berlin]",
    expected: "2024-09-02T00:00:00[Europe/Berlin]",
  },
  {
    description: "should handle leap year date in Europe/Berlin timezone",
    dateTime: "2024-02-29T12:00:00[Europe/Berlin]",
    expected: "2024-02-26T00:00:00[Europe/Berlin]",
  },
  {
    description: "should handle New Year's Day in America/New_York timezone",
    dateTime: "2024-01-01T10:00:00[America/New_York]",
    expected: "2024-01-01T00:00:00[America/New_York]",
  },
] as const;

it.each(testCases)("$description", (testCase) => {
  const dateTime = zonedDateTime(testCase.dateTime)

  const result = startOfWeek(dateTime)

  expect(result).toStrictEqual(zonedDateTime(testCase.expected))
})
