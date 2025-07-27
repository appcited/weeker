import { it, expect } from "vitest";
import { Temporal } from "@js-temporal/polyfill";
import { zonedDateTime } from "./zonedDateTime.ts";

const testCases = [
    {
        description: "should parse ISO 8601 string with UTC timezone",
        input: "2025-07-25T10:30:45[UTC]",
    },
    {
        description: "should parse ISO 8601 string with America/New_York timezone",
        input: "2025-07-25T10:30:45[America/New_York]",
    },
    {
        description: "should parse ISO 8601 string with Europe/London timezone",
        input: "2025-07-25T10:30:45[Europe/London]",
    },
    {
        description: "should handle millisecond precision",
        input: "2025-07-25T10:30:45.123[UTC]",
    },
    {
        description: "should handle leap year February 29th",
        input: "2024-02-29T12:00:00[UTC]",
    },
    {
        description: "should handle year boundary crossing",
        input: "2025-01-01T00:00:00[UTC]",
    },
    {
        description: "should handle different timezone offset format",
        input: "2025-07-25T10:30:45+05:30[Asia/Kolkata]",
    },
] as const;

it.each(testCases)("$description", (testCase) => {
    const result = zonedDateTime(testCase.input);

    expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
    expect(result).toStrictEqual(Temporal.ZonedDateTime.from(testCase.input));
});
