<script setup lang="ts">
import type { Entry } from '#src/model/Entry.ts';

const { entry } = defineProps<{
  entry: Entry
}>()
</script>

<template>
  <div class="calendar-entry" :style="{
    '--background-color': entry.color,
  }">
    {{ entry.name }}
  </div>
</template>

<style lang="css" scoped>
.calendar-entry {
  --border-color: color-mix(in srgb, var(--background-color), #000000 20%);
  --text-color: #ffffff;
  --border-radius: 0.25rem;

  background-color: var(--background-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 0.25rem;
  user-select: none;
}
</style>
