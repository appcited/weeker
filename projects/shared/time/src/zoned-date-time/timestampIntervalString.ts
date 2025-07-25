import type { Interval } from "#src/common/Interval.ts";
import type { Temporal } from "@js-temporal/polyfill";

/**
 * Converts an {@link Interval} of {@link Temporal.ZonedDateTime} into a string representation of their timestamps in
 * milliseconds, separated by a slash. Inspired by {@link https://en.wikipedia.org/wiki/ISO_8601#Time_intervals|ISO8601 interval representation}.
 *
 * @example 1751839200000/1751925600000
 *
 * @param interval - An {@link Interval} of {@link Temporal.ZonedDateTime}
 * @returns A string in the format "startTimestamp/endTimestamp", where each timestamp is in milliseconds
 */
export function timestampIntervalString(interval: Interval<Temporal.ZonedDateTime>) {
    return `${interval.start.epochMilliseconds}/${interval.end.epochMilliseconds}`;
}
