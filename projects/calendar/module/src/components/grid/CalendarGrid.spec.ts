import { render } from 'vitest-browser-vue'
import CalendarGrid from './CalendarGrid.vue'
import { expect, it } from 'vitest'
import { h } from 'vue'

const defaultRenderOptions = (): Parameters<typeof render<typeof CalendarGrid<string>>>[1] => ({
  props: {
    items: ["item1", "item2", "item3", "item4", "item5"],
    options: {
        keyFn: (item) => item
    },
  },
  slots: {
    default: (args) =>
      h({
        template: `<div>default-slot-${args.item}</div>`,
      }),
  },
})

it('renders all items in default slot', async () => {
  const component = render(CalendarGrid<string>, defaultRenderOptions())

  await expect.element(component.getByText("default-slot-item1")).toBeInTheDocument()
  await expect.element(component.getByText("default-slot-item2")).toBeInTheDocument()
  await expect.element(component.getByText("default-slot-item3")).toBeInTheDocument()
  await expect.element(component.getByText("default-slot-item4")).toBeInTheDocument()
  await expect.element(component.getByText("default-slot-item5")).toBeInTheDocument()
})

it('renders all items horizontally', async ({ task }) => {
  const component = render(CalendarGrid<string>, defaultRenderOptions())

  await expect
    .element(component.container.children[0]).toMatchScreenshot(task.name)
})
