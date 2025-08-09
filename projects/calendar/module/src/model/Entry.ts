import type { Temporal } from "@js-temporal/polyfill"

export interface Entry {
  id: string
  name: string
  color: string
  start: Temporal.ZonedDateTime
  end: Temporal.ZonedDateTime
}
