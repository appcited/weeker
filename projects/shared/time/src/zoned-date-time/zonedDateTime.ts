import { Temporal } from "@js-temporal/polyfill";
import type { Rfc9557ZonedDateTime } from "./Rfc9557ZonedDateTime.ts";

/**
 * Creates a {@link Temporal.ZonedDateTime} instance from a {@link Temporal.ZonedDateTimeLike} or an
 * {@link Rfc9557ZonedDateTime} string.
 *
 * @param value - An {@link Temporal.ZonedDateTimeLike} or {@link Rfc9557ZonedDateTime} string
 * @returns A {@link Temporal.ZonedDateTime} instance
 */
export function zonedDateTime(value: Temporal.ZonedDateTimeLike | Rfc9557ZonedDateTime): Temporal.ZonedDateTime {
    return Temporal.ZonedDateTime.from(value);
}
