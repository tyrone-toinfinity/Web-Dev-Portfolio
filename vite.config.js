import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    minify: "terser",
    rollupOptions: {
      minify: true,
    },
  },
});
