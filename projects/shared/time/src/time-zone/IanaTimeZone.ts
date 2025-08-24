import type { Nominal } from "@weeker/shared-common";

/**
 * An time zone string in the IANA time zone database
 *
 * {@link https://www.iana.org/time-zones}

 * @example Europe/Berlin
 */
export type IanaTimeZone = Nominal<string, "IanaTimeZone">
