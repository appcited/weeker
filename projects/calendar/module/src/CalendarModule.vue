<script setup lang="ts">
import { computed } from 'vue';
import { weekInterval, now, splitByDay, timestampIntervalString } from "@weeker/shared-time";
import CalendarGrid from './components/grid/CalendarGrid.vue';
import CalendarTimeBand from './components/time-band/CalendarTimeBand.vue';
import CalendarEntry from './components/entry/CalendarEntry.vue';

const { contextValue = 'now', viewMode = 'week' } = defineProps<{
  contextValue?: 'now'
  viewMode?: 'week'
}>()

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

const intervals = computed(() => [...splitByDay(contextViewModeInterval.value)]);
const gridOptions = computed(() => ({
    keyFn: timestampIntervalString,
}));

const entries = computed(() => []);
</script>

<template>
    <CalendarGrid
        style="height: 100%;"
        :items="intervals"
        :options="gridOptions"
        #default="{ item }"
    >
        <CalendarTimeBand :interval="item" :entries #default="{ entry }">
            <CalendarEntry :entry />
        </CalendarTimeBand>
    </CalendarGrid>
</template>
