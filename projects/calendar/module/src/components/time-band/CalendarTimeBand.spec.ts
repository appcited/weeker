import { render } from 'vitest-browser-vue'
import CalendarTimeBand from './CalendarTimeBand.vue'
import { expect, it } from 'vitest'
import { zonedDateTime } from '@weeker/shared-time'

it('sets data-interval-start attribute to interval start epochMilliseconds', async () => {
  const start = zonedDateTime('2025-07-27T00:00:00[Europe/Berlin]')
  const component = render(CalendarTimeBand, {
    props: {
      interval: {
        start,
        end: zonedDateTime('2025-07-28T00:00:00[Europe/Berlin]')
      }
    }
  })

  await expect
    .element(component.container.children[0])
    .toHaveAttribute("data-interval-start", start.epochMilliseconds.toString())
})

it('sets data-interval-end attribute to interval end epochMilliseconds', async () => {
  const end = zonedDateTime('2025-07-28T00:00:00[Europe/Berlin]')
  const component = render(CalendarTimeBand, {
    props: {
      interval: {
        start: zonedDateTime('2025-07-27T00:00:00[Europe/Berlin]'),
        end
      }
    }
  })

  await expect
    .element(component.container.children[0])
    .toHaveAttribute("data-interval-end", end.epochMilliseconds.toString())
})
