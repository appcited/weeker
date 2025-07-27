<script setup lang="ts" generic="T extends any">
const { items, options } = defineProps<{
    items: T[];
    options: {
        keyFn: (item: T) => string;
    }
}>();
</script>

<template>
    <div style="display: grid;" :style="{
        gridTemplateColumns: `repeat(${items.length}, 1fr)`,
        gridTemplateRows: `1fr`,
    }">
        <slot v-for="item in items" :key="options.keyFn(item)" :item />
    </div>
</template>
