import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "dist",
      ".eslintrc.cjs",
      "**/*.cjs",
      "**/*.spec.ts",
      "tailwind.config.js",
      "commitlint.config.js",
      "vite.config.ts",
      "**/*.spec.tsx",
      "node_modules",
      "scripts",
      "rollup.config.js",
    ],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "no-console": 1,
      "no-unused-vars": [0, { args: "after-used", argsIgnorePattern: "^_" }],
      "spaced-comment": 0,
      "no-explicit-any": 0,
      "@typescript-eslint/no-unused-vars": [2, { args: "after-used", argsIgnorePattern: "^_" }],
    },
  }
);
