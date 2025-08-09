<script setup lang="ts" generic="T">
const { items, options } = defineProps<{
    items: T[];
    options: {
        keyFn: (item: T) => string;
    }
}>();
</script>

<template>
    <div class="grid grid-rows-1" :style="{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }">
        <slot v-for="item in items" :key="options.keyFn(item)" :item />
    </div>
</template>
