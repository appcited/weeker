import type { Nominal } from "@weeker/shared-common";

/**
 * An ISO 8601 plain time format (without time zone).
 *
 * {@link https://en.wikipedia.org/wiki/ISO_8601#Local_time_(unqualified) | Specification local time}
 *
 * @example "17:34:19"
 */
export type Iso8601PlainTime = Nominal<string, "Iso8601PlainTime">
