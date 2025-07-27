/**
 * A {@link https://en.wikipedia.org/wiki/Interval_(mathematics)#Terminology|closed} {@link https://en.wikipedia.org/wiki/Partially_ordered_set#Intervals|interval}
 * between {@link Interval.start} and {@link Interval.end}
 * 
 * @example [1, 10] - represents an interval that includes all numbers from 1 to 10, including the endpoints.
 * 
 * @example
 * ```ts
 * const interval: Interval<number> = { start: 1, end: 10 };
 * const dateInterval: Interval<Date> = { start: new Date('2023-01-01'), end: new Date('2023-12-31') };
 * ```
 *
 * @template T - The type of the start and end values in the interval
 * @property {T} start - The start value of the interval
 * @property {T} end - The end value of the interval
 */
export interface Interval<T> {
    start: T;
    end: T;
}
