import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import ElementPlus from "unplugin-element-plus/vite";

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "lib",
    lib: {
      entry: "src/index.js",
      name: "ElTreeLine",
      formats: ["es", "umd"],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      cssFileName: "index",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    vue(),
    ElementPlus({
      useSource: true,
    }),
  ],
});
