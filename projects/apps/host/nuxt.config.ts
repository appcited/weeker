import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/style.css'],
  ssr: false,
  vite: {
    plugins: [tailwindcss()],
  },
})
