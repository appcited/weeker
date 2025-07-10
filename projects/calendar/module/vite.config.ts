import vue from "@vitejs/plugin-vue"
import vueDevTools from 'vite-plugin-vue-devtools'
import { defineConfig } from "vite"

import packageJson from "./package.json"

export default defineConfig({
  build: {
    // better HMR support
    emptyOutDir: false,
    target: "esnext",
    minify: false,
    sourcemap: true,
    lib: {
      entry: "src",
      cssFileName: "style",
    },
    rollupOptions: {
      external: Object.keys(packageJson.peerDependencies).map(lib => new RegExp(`^${lib}`)),
      output: [
        {
          entryFileNames: "[name].js",
          preserveModules: true,
          preserveModulesRoot: "src",
        },
      ],
    },
  },
  plugins: [
    vue(),
    vueDevTools()
  ],
})
