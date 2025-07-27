import type { ComparisonResult } from "./ComparisonResult.ts";

/**
 * Compares {@link a} and {@link b} and returns a {@link ComparisonResult}.
 *
 * @template T The type of elements being compared
 *
 * @returns -1 if x is less than y
 * @returns  0 if x is equal to y
 * @returns  1 if x is greater than y
 */
export type Comparator<T> = (x: T, y: T) => ComparisonResult
