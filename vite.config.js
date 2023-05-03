import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    minify: "esbuild",
  },
  css: {
    modules: true,
  },
});
