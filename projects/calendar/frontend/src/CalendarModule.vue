<script setup lang="ts">
import { computed } from 'vue';
import { useQuery } from '@tanstack/vue-query'

import { weekInterval, now, splitByDay } from "@weeker/shared-time";
import { getClient } from "@weeker/shared-api-client";

import CalendarGrid from './components/grid/CalendarGrid.vue';
import CalendarTimeBand from './components/time-band/CalendarTimeBand.vue';
import CalendarEntry from './components/entry/CalendarEntry.vue';
import { EntryServiceImpl } from './model/entry/EntryServiceImpl.ts';
import type { EntryService } from './model/entry/EntryService.ts';

const { contextValue = 'now', viewMode = 'week' } = defineProps<{
  contextValue?: 'now'
  viewMode?: 'week'
}>()

// TODO: use provide / inject
const client = getClient({ baseUrl: 'http://localhost:3000/api' });
const entryService: EntryService = new EntryServiceImpl(client);

const viewOptions = {
  timeZone: 'Europe/Berlin',
} as const;

const contextDateTime = computed(() => {
    switch (contextValue) {
        case 'now':
            return now().toZonedDateTimeISO(viewOptions.timeZone);
    }
});

const contextViewModeInterval = computed(() => {
    switch (viewMode) {
        case 'week':
            return weekInterval(contextDateTime.value);
    }
});

const gridIntervals = computed(() => splitByDay(contextViewModeInterval.value).toArray().map(interval => ({
  start: interval.start.epochMilliseconds,
  end: interval.end.epochMilliseconds,
})));

const { data: entries } = useQuery({
  queryKey: ['entries'],
  queryFn: () => entryService.list(contextViewModeInterval.value),
})
</script>

<template>
    <CalendarGrid
        class="h-full"
        :items="gridIntervals"
        :options="{
          keyFn: (item) => `${item.start}/${item.end}`,
        }"
        #default="{ item }"
    >
        <CalendarTimeBand :interval="item" :entries #default="{ entry }">
            <CalendarEntry :entry />
        </CalendarTimeBand>
    </CalendarGrid>
</template>
