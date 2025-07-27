import type { Nominal } from "@weeker/shared-common";

/**
 * An RFC 9557 compliant zoned date-time format.
 *
 * {@link https://datatracker.ietf.org/doc/html/rfc9557 | Specification}
 *
 * {Date}T{Time}[{Zone}]
 * - The letter "T" is used as a delimiter between date and time
 * - The zone is specified in square brackets
 *
 * @example "2025-07-25T10:30:45[UTC]"
 */
export type Rfc9557ZonedDateTime = Nominal<string, "Rfc9557ZonedDateTime">
