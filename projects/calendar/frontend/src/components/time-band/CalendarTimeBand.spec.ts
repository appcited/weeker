import { render } from 'vitest-browser-vue'
import CalendarTimeBand from './CalendarTimeBand.vue'
import { expect, it, vi } from 'vitest'
import { zonedDateTime } from '@weeker/shared-time'
import { h } from 'vue'

const defaultRenderOptions = () => ({
  props: {
    entries: [{
      id: '1',
      start: zonedDateTime('2025-07-27T02:00:00[Europe/Berlin]'),
      end: zonedDateTime('2025-07-27T12:00:00[Europe/Berlin]')
    },
    {
      id: '2',
      start: zonedDateTime('2025-07-27T14:00:00[Europe/Berlin]'),
      end: zonedDateTime('2025-07-27T18:00:00[Europe/Berlin]')
    }],
    interval: {
      start: zonedDateTime('2025-07-27T00:00:00[Europe/Berlin]'),
      end: zonedDateTime('2025-07-28T00:00:00[Europe/Berlin]'),
    }
  },
  slots: {
    default: vi.fn((args) => h({
      template: `<div data-testid="default-slot-entry-${args.entry.id}" style="background-color: red;">
        Entry ${args.entry.id}
      </div>`,
    })),
  },
  attrs: {
    style: {
      height: "600px",
      width: "200px",
    },
  },
} satisfies Parameters<typeof render<typeof CalendarTimeBand>>[1])

it('sets data-interval-start attribute to interval start epochMilliseconds', async () => {
  const renderOptions = defaultRenderOptions()
  const component = render(CalendarTimeBand, renderOptions)

  await expect
    .element(component.container.children[0])
    .toHaveAttribute("data-interval-start", renderOptions.props.interval.start.epochMilliseconds.toString())
})

it('sets data-interval-end attribute to interval end epochMilliseconds', async () => {
  const renderOptions = defaultRenderOptions()
  const component = render(CalendarTimeBand, renderOptions)

  await expect
    .element(component.container.children[0])
    .toHaveAttribute("data-interval-end", renderOptions.props.interval.end.epochMilliseconds.toString())
})

it('accepts prop entries to be undefined', async () => {
  const renderOptions = {
    ...defaultRenderOptions(),
    props: {
      ...defaultRenderOptions().props,
      entries: undefined
    },
  }

  render(CalendarTimeBand, renderOptions)

  expect(renderOptions.slots.default).not.toHaveBeenCalled()
})

it('passes entry to default slot', async () => {
  const renderOptions = defaultRenderOptions()
  render(CalendarTimeBand, renderOptions)

  expect(renderOptions.slots.default).toHaveBeenCalledWith({ entry: renderOptions.props.entries[0] })
  expect(renderOptions.slots.default).toHaveBeenCalledWith({ entry: renderOptions.props.entries[1] })
})

it('renders default slot as entry', async () => {
  const renderOptions = defaultRenderOptions()
  const component = render(CalendarTimeBand, renderOptions)

  const entryElement = component.getByTestId('default-slot-entry-1')
  await expect.element(entryElement).toBeInTheDocument()
})

it('renders entry in correct position and design', async ({ task }) => {
  const renderOptions = defaultRenderOptions()
  const component = render(CalendarTimeBand, renderOptions)

  await expect.element(component.container.children[0]).toMatchScreenshot(task.name)
})
