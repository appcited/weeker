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
    default: (args) => h({
      template: `<div data-testid="default-slot">${args.item}</div>`,
    }),
  },
})

it('renders all items in default slot', async () => {
  const component = render(CalendarGrid<string>, defaultRenderOptions())

  await expect.element(component.getByTestId("default-slot").getByText("item1")).toBeInTheDocument()
  await expect.element(component.getByTestId("default-slot").getByText("item2")).toBeInTheDocument()
  await expect.element(component.getByTestId("default-slot").getByText("item3")).toBeInTheDocument()
  await expect.element(component.getByTestId("default-slot").getByText("item4")).toBeInTheDocument()
  await expect.element(component.getByTestId("default-slot").getByText("item5")).toBeInTheDocument()
})

it('renders all items horizontally', async ({ task }) => {
  const component = render(CalendarGrid<string>, defaultRenderOptions())

  await expect
    .element(component.container.children[0]).toMatchScreenshot(task.name)
})
