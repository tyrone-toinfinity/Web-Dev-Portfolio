import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    minify: "esbuild",
  },
  css: {
    modules: true,
  },
});
