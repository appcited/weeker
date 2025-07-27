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
})
