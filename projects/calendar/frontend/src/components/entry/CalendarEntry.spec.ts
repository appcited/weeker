import { render } from 'vitest-browser-vue'
import CalendarEntry from './CalendarEntry.vue'
import { expect, it } from 'vitest'
import { zonedDateTime } from '@weeker/shared-time'

type RenderOptions = Parameters<typeof render<typeof CalendarEntry>>[1]
const renderOptions: RenderOptions = {
  props: {
    entry: {
      id: "9ed12927-7e76-4866-ab1b-f0698ca1312f",
      name: "Entry Name",
      start: zonedDateTime("2024-09-19T09:00:00[Europe/Berlin]").epochMilliseconds,
      end: zonedDateTime("2024-09-19T19:00:00[Europe/Berlin]").epochMilliseconds,
      color: "#ff0000",
    },
    style: {
      height: "400px",
      width: "200px",
      margin: "auto",
    },
  },
}

it("displays entry name", async () => {
  const component = render(CalendarEntry, renderOptions)

  await expect
    .element(component.getByText("Entry Name"))
    .toBeVisible()
})

it('renders entry colors', async ({ task }) => {
  const component = render(CalendarEntry, renderOptions)

  await expect
    .element(component.container.children[0])
    .toMatchScreenshot(task.name)
})
