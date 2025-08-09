<script setup lang="ts" generic="T extends Idable & Interval<Temporal.ZonedDateTime>">
import { Temporal } from '@js-temporal/polyfill';
import { type Interval, type Idable, minmax } from "@weeker/shared-common";

const { interval } = defineProps<{
    interval: Interval<Temporal.ZonedDateTime>;
    entries: T[];
}>();

function entryPosition(entry: T) {
    const duration = interval.start.until(interval.end).total({ unit: 'milliseconds' })
    if (duration <= 0) return null
    const entryStartOffset = interval.start.until(entry.start).total({ unit: 'milliseconds' })
    const entryEndOffset = entry.end.until(interval.end).total({ unit: 'milliseconds' })
    return {
        top: `${minmax(0, 1, entryStartOffset / duration) * 100}%`,
        right: 0,
        bottom: `${minmax(0, 1, entryEndOffset / duration) * 100}%`,
        left: 0,
    }
}
</script>

<template>
    <div style="position: relative;"
        :data-interval-start="interval.start.epochMilliseconds"
        :data-interval-end="interval.end.epochMilliseconds"
    >
        <div
            v-for="entry in entries"
            :key="entry.id"
            class="entry"
            style="position: absolute; overflow: hidden;"
            :style="entryPosition(entry)"
        >
            <slot :entry />
        </div>
    </div>
</template>

<style lang="css" scoped>
.entry {
    &>* {
        height: 100%;
        width: 100%;
    }
}
</style>
