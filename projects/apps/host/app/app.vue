<script setup lang="ts">
import logoMini from '@weeker/shared-logo/logo-mini.svg?url';

useHead({
	title: 'Weeker',
	meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
	],
	link: [
		{ rel: 'icon', type: 'image/svg+xml', href: logoMini },
	],
})
</script>

<template>
	<NuxtPage />
</template>

<style lang="css">
html,
body,
#__nuxt {
	width: 100%;
	height: 100%;
}
</style>

