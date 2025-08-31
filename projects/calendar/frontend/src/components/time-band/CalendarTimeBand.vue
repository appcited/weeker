<script setup lang="ts" generic="T extends Idable & Interval<EpochMilliseconds>">
import { type Interval, type Idable, minmax } from "@weeker/shared-common";
import type { EpochMilliseconds } from "@weeker/shared-time";

const { interval } = defineProps<{
    interval: Interval<EpochMilliseconds>;
    entries?: T[];
}>();

function entryPosition(entry: T) {
    const duration = interval.end - interval.start
    if (duration <= 0) return null
    const entryStartOffset = entry.start - interval.start
    const entryEndOffset = interval.end - entry.end 
    return {
        top: `${minmax(0, 1, entryStartOffset / duration) * 100}%`,
        bottom: `${minmax(0, 1, entryEndOffset / duration) * 100}%`,
    }
}
</script>

<template>
    <div class="relative"
        :data-interval-start="interval.start"
        :data-interval-end="interval.end"
    >
        <div
            v-for="entry in entries"
            :key="entry.id"
            class="absolute overflow-hidden w-full [&>*]:h-full"
            :style="entryPosition(entry)"
        >
            <slot :entry />
        </div>
    </div>
</template>
