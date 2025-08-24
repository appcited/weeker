import { Temporal } from "@js-temporal/polyfill";
import type { Iso8601PlainTime } from "./Iso8601PlainTime.ts";

export type PlainTime = Temporal.PlainTime;

export function plainTime(value: Temporal.PlainTimeLike | Iso8601PlainTime): Temporal.PlainTime {
    return Temporal.PlainTime.from(value);
}
