import type { EpochMilliseconds } from "@weeker/shared-time"

export interface Entry {
  id: string
  name: string
  color: string
  start: EpochMilliseconds
  end: EpochMilliseconds
}
