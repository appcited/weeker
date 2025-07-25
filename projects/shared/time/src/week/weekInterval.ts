import type { Temporal } from "@js-temporal/polyfill";
import { startOfWeek } from "#src/week/startOfWeek.ts";
import type { Interval } from "#src/index.ts";

/**
 * Returns an {@link Interval<Temporal.ZonedDateTime>} representing the start and end of the week for a given {@link Temporal.ZonedDateTime}.
 *
 * @example
 * For a ZonedDateTime representing Friday, July 25, 2025 returns an interval from Monday, July 21, 2025 at 00:00:00
 * to Monday, July 28, 2025 at 00:00:00
 *
 * @param context - A {@link Temporal.ZonedDateTime} representing any day within the target week
 * @returns An {@link Interval} of {@link Temporal.ZonedDateTime} representing the week interval
 */
export function weekInterval(context: Temporal.ZonedDateTime): Interval<Temporal.ZonedDateTime> {
    const startOfContextWeek = startOfWeek(context);
    return {
        start: startOfContextWeek,
        end: startOfContextWeek.add({ days: 7 }),
    };
}
