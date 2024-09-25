// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default defineConfig({
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
