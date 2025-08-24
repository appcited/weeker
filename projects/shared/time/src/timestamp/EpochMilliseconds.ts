import type { Tagged } from "@weeker/shared-common";

/**
 * A Unix epoch timestamp expressed in milliseconds.
 *
 * Represents the number of whole milliseconds elapsed since the Unix epoch
 * (1970-01-01T00:00:00Z, UTC), not counting leap seconds.
 *
 * {@link https://en.wikipedia.org/wiki/Unix_time | Specification / Reference}
 *
 * Notes:
 * - Always UTC-based (no time zone offset encoded — it's an absolute instant reference).
 * - Stored as a JavaScript `number` (IEEE-754 double); safe up to ±8.64e15 ms (~285,616 years).
 *
 * @example
 *   const now: Timestamp = Date.now() as Timestamp
 *   const specific: Timestamp = 1735061405000 as Timestamp // 2024-12-24T15:30:05.000Z
 */
export type EpochMilliseconds = number & Tagged<"Timestamp">
