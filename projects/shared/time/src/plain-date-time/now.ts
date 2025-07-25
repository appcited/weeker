import { Temporal } from "@js-temporal/polyfill";

export function now(): Temporal.Instant {
    return Temporal.Now.instant();
}
