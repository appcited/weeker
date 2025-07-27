import { afterEach, beforeEach, expect, it, vi } from "vitest"

import { now } from "./now"

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

it("returns current instant date time", () => {
  const fixedEpochMilliseconds = 1753650648000
  vi.setSystemTime(new Date(fixedEpochMilliseconds))
  expect(now().epochMilliseconds).toEqual(fixedEpochMilliseconds)
})
