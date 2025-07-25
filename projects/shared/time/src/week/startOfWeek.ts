import type { Temporal } from "@js-temporal/polyfill";

/**
 * Returns the start of the week for a given {@link Temporal.ZonedDateTime}.
 *
 * @example
 * // For a ZonedDateTime representing Friday, July 25, 2025
 * // Returns Monday, July 21, 2025 at 00:00:00
 * 
 * @todo This function assumes the week starts on Monday.
 * 
 * @param context - A {@link Temporal.ZonedDateTime} representing any day within the target week
 * @returns A {@link Temporal.ZonedDateTime} representing Monday of that week at 00:00:00 in the same timezone
 */
export function startOfWeek(context: Temporal.ZonedDateTime) {
    return context.with({
        day: context.day - (context.dayOfWeek - 1)
    }).startOfDay();
}
