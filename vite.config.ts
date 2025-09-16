import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import alias from "@rollup/plugin-alias";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), dts({ include: ["lib"], insertTypesEntry: true, rollupTypes: true })],
  resolve: {
    alias: {
      "@library": resolve(__dirname, "lib"),
    },
  },
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      plugins: [
        alias({
          entries: [
            { find: "@library", replacement: resolve(__dirname, "lib") },
          ],
        }),
      ],
      output: {
        manualChunks(id) {
          if (id.includes(".svg?react")) {
            return id
              .toString()
              .split("/")
              [id.toString().split("/").length - 1].split("?react")[0]
              .toString();
          }
        },
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  assetsInclude: ["**/*.otf", "**/*.woff", "**/*.woff2", "**/*.ttf"],
});
