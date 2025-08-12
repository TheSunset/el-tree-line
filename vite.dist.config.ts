import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import ElementPlus from "unplugin-element-plus/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/el-tree-line/",
  build: {
    outDir: "dist",
  },
  plugins: [
    vue(),
    ElementPlus({
      useSource: true,
    }),
  ],
});
