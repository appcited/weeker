<script setup lang="ts">
import type { Entry } from '#src/model/Entry.ts';

const { entry } = defineProps<{
  entry: Entry
}>()
</script>

<template>
  <div class="p-1 select-none bg-(--background-color) rounded border border-(--border-color) text-white" :style="{
    '--background-color': entry.color,
    '--border-color': `color-mix(in srgb, var(--background-color), #000000 20%)`
  }">
    {{ entry.name }}
  </div>
</template>
