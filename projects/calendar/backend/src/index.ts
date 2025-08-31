import { type Implementer } from "@orpc/server"
import { contract } from "@weeker/api"
import { now } from "@weeker/shared-time"

type ContractImplementer = Implementer<typeof contract, Record<never, never>, Record<never, never>>
type EntriesListHandler = Parameters<ContractImplementer["entries"]["list"]["handler"]>[0]

export const entriesListHandler: EntriesListHandler = async ({ }) => {
  return [
    {
      id: '123e4567-e89b-12d3-a456-426614174000',
      name: 'Entry 3',
      color: '#ff0000',
      start: now().toZonedDateTimeISO("Europe/Berlin").withPlainTime("12:00").epochMilliseconds,
      end: now().toZonedDateTimeISO("Europe/Berlin").withPlainTime("18:00").epochMilliseconds,
    },
  ]
}
