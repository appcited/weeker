import type { Nominal } from "@weeker/shared-common"

/**
 * An ISO8601 weekday
 *
 * {@link https://en.wikipedia.org/wiki/ISO_week_date}
 *
 * @example 1 = Monday, 7 = Sunday
 */
export type Iso8601Weekday = Nominal<number, "Iso8601Weekday">
