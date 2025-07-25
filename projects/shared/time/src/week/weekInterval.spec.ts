import { it, expect } from "vitest";
import { weekInterval } from "./weekInterval.ts";
import { zonedDateTime } from "#src/zoned-date-time/zonedDateTime.ts";

const testCases = [
    {
        description: "should handle a context at start of week",
        context: "2025-07-14T00:00:00.000000000[UTC]",
        expected: {
            end: "2025-07-21T00:00:00+00:00[UTC]",
            start: "2025-07-14T00:00:00+00:00[UTC]",
        }
    },
    {
        description: "should handle a context one nanosecond before end of week",
        context: "2025-07-20T23:59:59.999999999[UTC]",
        expected: {
            end: "2025-07-21T00:00:00+00:00[UTC]",
            start: "2025-07-14T00:00:00+00:00[UTC]",
        }
    },
    {
        description: "should handle a context with different timezone",
        context: "2025-07-16T12:34:56.123456789[Europe/Berlin]",
        expected: {
            end: "2025-07-21T00:00:00+02:00[Europe/Berlin]",
            start: "2025-07-14T00:00:00+02:00[Europe/Berlin]",
        }
    },
    {
        description: "should handle a context at year boundary",
        context: "2024-12-31T12:00:00[UTC]",
        expected: {
            end: "2025-01-06T00:00:00+00:00[UTC]",
            start: "2024-12-30T00:00:00+00:00[UTC]",
        }
    },
    {
        description: "should handle a context on February 29th in a leap year",
        context: "2024-02-29T12:00:00[UTC]",
        expected: {
            end: "2024-03-04T00:00:00+00:00[UTC]",
            start: "2024-02-26T00:00:00+00:00[UTC]",
        }
    }
] as const;

it.each(testCases)("$description", (testCase) => {
    const context = zonedDateTime(testCase.context);

    const result = weekInterval(context);

    expect(result).toStrictEqual({
        end: zonedDateTime(testCase.expected.end),
        start: zonedDateTime(testCase.expected.start),
    });
});
