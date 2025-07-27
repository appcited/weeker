<script setup lang="ts">
import { Temporal } from '@js-temporal/polyfill';
import { type Interval } from "@weeker/shared-common";

const { interval } = defineProps<{
    interval: Interval<Temporal.ZonedDateTime>;
}>();
</script>

<template>
    <div :data-interval-start="interval.start.epochMilliseconds"
         :data-interval-end="interval.end.epochMilliseconds">
    </div>
</template>
