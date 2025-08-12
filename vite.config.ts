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
      // 确保外部化处理那些你不想打包进库的依赖,解决插件报错问题(reading 'isCE')
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
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
