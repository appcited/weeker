import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { z } from 'zod'

const env = z.object({
  PORT: z.coerce.number().int()
}).parse(process.env)

const app = new Hono()

// Inspired by https://kubernetes.io/docs/reference/using-api/health-checks/
app.get('/readyz', ({ text }) => text('ok'))
app.get('/livez', ({ text }) => text('ok'))

serve({
  fetch: app.fetch,
  port: env.PORT,
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
