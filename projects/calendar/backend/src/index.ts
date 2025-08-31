import { type Implementer } from "@orpc/server"
import { contract } from "@weeker/shared-api"
import { instant } from "@weeker/shared-time"

type ContractImplementer = Implementer<typeof contract, Record<never, never>, Record<never, never>>
type EntriesListHandler = Parameters<ContractImplementer["entries"]["list"]["handler"]>[0]

export const entriesListHandler: EntriesListHandler = async ({ }) => {
  return [
    {
      id: '123e4567-e89b-12d3-a456-426614174000',
      name: 'Entry 3',
      color: '#ff0000',
      start: instant('2025-08-17T12:00:00Z').epochMilliseconds,
      end: instant('2025-08-17T18:00:00Z').epochMilliseconds,
    },
  ]
}
