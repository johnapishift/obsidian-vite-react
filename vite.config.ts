import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

// https://vitejs.dev/config/
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
	build: {
		outDir: "testing-vault/.obsidian/plugins/obsidian-vite-react",
		assetsDir: "./",
		rollupOptions: {
			external: ["obsidian"],
			input: "src/main.tsx",
			output: {
				format: "cjs",
				exports: "default",
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
