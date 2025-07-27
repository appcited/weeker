import { expect, it } from "vitest"

import { throwError } from "./throwError"

it("should throw the provided error", () => {
  const error = new Error("This is a test error")
  expect(() => throwError(error)).toThrow(error)
})

it("should be usable with nullish coalescing operator", () => {
  const maybeNullishVar: string | null = null
  
  expect(() => {
    maybeNullishVar ?? throwError("maybeNullishVar should not be null")
  }).toThrow("maybeNullishVar should not be null")
})
