import type { Temporal } from "@js-temporal/polyfill";
import type { Interval } from "@weeker/shared-common";
import type { Entry } from "./Entry.ts";

export interface EntryService {
  list(interval: Interval<Temporal.ZonedDateTime>): Promise<Entry[]>;
}
