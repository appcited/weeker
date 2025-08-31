import { oc } from "@orpc/contract"
import z from "zod"

const EntrySchema = z.object({
  id: z.uuid(),
  name: z.string(),
  color: z.string(),
  start: z.number(),
  end: z.number(),
})

const Iso8601DateTimeIntervalSchema = z.object({
  start: z.string(),
  end: z.string(),
})

export const contract = {
    entries: {
        list: oc
          .route({ path: '/entries', method: 'GET' })
          .input(Iso8601DateTimeIntervalSchema)
          .output(z.array(EntrySchema))
    }
}
