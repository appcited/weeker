import type { Nominal } from "@weeker/shared-common";

/**
 * An ISO 8601 combined, extended plain date and time format (without time zone).
 *
 * {@link https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations | Specification}
 *
 * [[Date]]T[[Time]]
 * - The letter "T" ist used as delimiter between date and time
 *
 * @example "2019-05-25T17:34:19"
 */
export type Iso8601PlainDateTime = Nominal<string, "Iso8601PlainDateTime">
