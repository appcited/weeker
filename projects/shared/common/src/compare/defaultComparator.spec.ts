import { expect, it } from "vitest"

import { defaultComparator } from "./defaultComparator"

it("should return -1 when first value is less than second value", () => {
  expect(defaultComparator(1, 2)).toBe(-1)
  expect(defaultComparator("a", "b")).toBe(-1)
  expect(defaultComparator(0, 1)).toBe(-1)
  expect(defaultComparator(-5, -3)).toBe(-1)
})

it("should return 0 when values are equal", () => {
  expect(defaultComparator(1, 1)).toBe(0)
  expect(defaultComparator("a", "a")).toBe(0)
  expect(defaultComparator(0, 0)).toBe(0)
  expect(defaultComparator(-5, -5)).toBe(0)
  expect(defaultComparator(true, true)).toBe(0)
  expect(defaultComparator(false, false)).toBe(0)
})

it("should return 1 when first value is greater than second value", () => {
  expect(defaultComparator(2, 1)).toBe(1)
  expect(defaultComparator("b", "a")).toBe(1)
  expect(defaultComparator(1, 0)).toBe(1)
  expect(defaultComparator(-3, -5)).toBe(1)
})
