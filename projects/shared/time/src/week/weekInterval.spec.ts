import { it, expect } from "vitest";
import { weekInterval } from "./weekInterval.ts";
import { zonedDateTime } from "#src/zoned-date-time/ZonedDateTime.ts";

const testCases = [
    {
        description: "should handle a context at start of week",
        context: zonedDateTime("2025-07-14T00:00:00.000000000[UTC]"),
        expected: {
            end: zonedDateTime("2025-07-21T00:00:00+00:00[UTC]"),
            start: zonedDateTime("2025-07-14T00:00:00+00:00[UTC]"),
        }
    },
    {
        description: "should handle a context one nanosecond before end of week",
        context: zonedDateTime("2025-07-20T23:59:59.999999999[UTC]"),
        expected: {
            end: zonedDateTime("2025-07-21T00:00:00+00:00[UTC]"),
            start: zonedDateTime("2025-07-14T00:00:00+00:00[UTC]"),
        }
    },
    {
        description: "should handle a context with different timezone",
        context: zonedDateTime("2025-07-16T12:34:56.123456789[Europe/Berlin]"),
        expected: {
            end: zonedDateTime("2025-07-21T00:00:00+02:00[Europe/Berlin]"),
            start: zonedDateTime("2025-07-14T00:00:00+02:00[Europe/Berlin]"),
        }
    },
    {
        description: "should handle a context at year boundary",
        context: zonedDateTime("2024-12-31T12:00:00[UTC]"),
        expected: {
            end: zonedDateTime("2025-01-06T00:00:00+00:00[UTC]"),
            start: zonedDateTime("2024-12-30T00:00:00+00:00[UTC]"),
        }
    },
    {
        description: "should handle a context on February 29th in a leap year",
        context: zonedDateTime("2024-02-29T12:00:00[UTC]"),
        expected: {
            end: zonedDateTime("2024-03-04T00:00:00+00:00[UTC]"),
            start: zonedDateTime("2024-02-26T00:00:00+00:00[UTC]"),
        }
    }
] as const;

it.each(testCases)("$description", (testCase) => {
    const result = weekInterval(testCase.context);

    expect(result).toStrictEqual(testCase.expected);
});
