// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "manifest.json",
          dest: "./",
        },
      ],
    }),
  ],
  optimizeDeps: {
    exclude: ["obsidian"], // Exclude 'obsidian' from dependency optimization
  },
  build: {
    outDir: "",
    assetsDir: "./",
    rollupOptions: {
      external: ["obsidian"],
      input: "src/main.tsx",
      output: {
        format: "cjs",
        exports: "auto",
        entryFileNames: "main.js",
        assetFileNames: "styles.css",
      },
      plugins: [
        commonjs(),
        resolve({
          browser: true,
        }),
      ],
    },
  },
});
