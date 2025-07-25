import type { Temporal } from "@js-temporal/polyfill"

/**
 * Returns a {@link Temporal.ZonedDateTime} representing the end of the day for the given {@link dateTime}.
 *
 * @param dateTime - The {@link Temporal.ZonedDateTime} to get the end of day for
 * @returns A new {@link Temporal.ZonedDateTime} representing the end of the day
 */
export function endOfDay(dateTime: Temporal.ZonedDateTime) {
  return dateTime.add({ days: 1 }).startOfDay()
}
