import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import alias from "@rollup/plugin-alias";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@library": resolve(__dirname, "lib"),
    },
  },
  build: {
    // copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      plugins: [
        alias({
          entries: [{ find: "@library", replacement: resolve(__dirname, "lib") }],
        }),
      ],
      output: {
        manualChunks(id) {
          if (id.includes(".svg?react")) {
            return id.toString().split("/")[id.toString().split("/").length - 1].split("?react")[0].toString();
          }
        },
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        sourcemap: true,
      },
    },
  },
  assetsInclude: ["**/*.otf", "**/*.woff", "**/*.woff2"],
});
