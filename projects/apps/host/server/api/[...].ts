import { OpenAPIHandler } from "@orpc/openapi/node"
import { implement } from "@orpc/server"
import { contract } from "@weeker/shared-api"
import { entriesListHandler } from "@weeker/calendar-backend"

const os = implement(contract)

const router = os.router({
  entries: {
    list: os.entries.list.handler(entriesListHandler),
  },
})

const handler = new OpenAPIHandler(router)

export default defineEventHandler(async (event) => {
  const { matched } = await handler.handle(
    event.node.req,
    event.node.res,
    {
      prefix: '/api',
    }
  )

  if (matched) {
    return
  }

  setResponseStatus(event, 404, 'Not Found')
  return 'Not found'
})
