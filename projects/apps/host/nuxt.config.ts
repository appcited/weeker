import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/style.css'],
  vite: {
    plugins: [tailwindcss()],
  },
})
