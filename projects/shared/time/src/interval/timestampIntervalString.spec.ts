import { it, expect } from "vitest";
import { timestampIntervalString } from "./timestampIntervalString.ts";
import { zonedDateTime } from "#src/zoned-date-time/ZonedDateTime.ts";

const testCases = [
    {
        description: "should convert interval with same timezone to timestamp string",
        interval: {
            start: zonedDateTime("2025-07-01T00:00:00[UTC]"),
            end: zonedDateTime("2025-07-02T00:00:00[UTC]"),
        },
        expected: "1751328000000/1751414400000"
    },
    {
        description: "should handle different timezones correctly",
        interval: {
            start: zonedDateTime("2025-07-01T12:00:00[America/New_York]"),
            end: zonedDateTime("2025-07-01T12:00:00[Europe/London]"),
        },
        expected: "1751385600000/1751367600000"
    },
    {
        description: "should handle same start and end times",
        interval: {
            start: zonedDateTime("2025-07-25T10:30:45[UTC]"),
            end: zonedDateTime("2025-07-25T10:30:45[UTC]"),
        },
        expected: "1753439445000/1753439445000"
    },
    {
        description: "should handle year boundary crossing",
        interval: {
            start: zonedDateTime("2024-12-31T23:59:59[UTC]"),
            end: zonedDateTime("2025-01-01T00:00:00[UTC]"),
        },
        expected: "1735689599000/1735689600000"
    },
    {
        description: "should handle leap year February 29th",
        interval: {
            start: zonedDateTime("2024-02-29T12:00:00[UTC]"),
            end: zonedDateTime("2024-03-01T12:00:00[UTC]"),
        },
        expected: "1709208000000/1709294400000"
    },
    {
        description: "should handle millisecond precision",
        interval: {
            start: zonedDateTime("2025-07-25T10:30:45.123[UTC]"),
            end: zonedDateTime("2025-07-25T10:30:45.456[UTC]"),
        },
        expected: "1753439445123/1753439445456"
    }
] as const;

it.each(testCases)("$description", (testCase) => {
    const result = timestampIntervalString(testCase.interval);

    expect(result).toBe(testCase.expected);
});
