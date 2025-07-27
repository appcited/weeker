import type { Comparator } from "./Comparator.ts"

export const defaultComparator: Comparator<any> = (a, b) => {
  if (a < b) return -1
  if (a == b) return 0
  return 1
}
