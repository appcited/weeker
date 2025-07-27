import { Temporal } from "@js-temporal/polyfill"

import { splitIntervalBy } from "@weeker/shared-common"

import { endOfDay } from "../day/endOfDay"

/**
 * Splits an {@link Interval} into daily {@link Interval}s
 *
 * @param interval - The interval to split
 * @returns An array of daily intervals
 */
export const splitByDay = splitIntervalBy<Temporal.ZonedDateTime>(
  Temporal.ZonedDateTime.compare,
)(endOfDay)
