import { oc } from "@orpc/contract"
import z from "zod"

const EntrySchema = z.object({
  id: z.uuid(),
  name: z.string(),
  color: z.string(),
  start: z.string(),
  end: z.string(),
})

const Iso8601DateTimeIntervalSchema = z.object({
  start: z.string(),
  end: z.string(),
})

const listEntries = oc
  .route({ path: '/entries', method: 'GET' })
  .input(Iso8601DateTimeIntervalSchema)
  .output(z.array(EntrySchema))

export const contract = {
    entries: {
        list: listEntries
    }
}
