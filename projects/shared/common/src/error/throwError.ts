/**
 * Throws the provided error
 *
 * @example
 * ```ts
 * maybeNullishVar ?? throwError("maybeNullishVar should not be null")
 * ```
 * 
 * @param error - The error to be thrown
 * @throws {unknown} The provided error
 */
export const throwError = (error: unknown) => {
  throw error
}
