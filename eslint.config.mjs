import js from "@eslint/js";
import globals from "globals";

const browserRules = {
  ...js.configs.recommended.rules,
  "no-redeclare": "warn",
  "no-unused-vars": ["warn", { args: "none", ignoreRestSiblings: true }],
};

const nodeRules = {
  ...js.configs.recommended.rules,
  "no-console": "off",
  "no-unused-vars": ["warn", { args: "none", ignoreRestSiblings: true }],
};

export default [
  {
    ignores: [
      ".codex/**",
      ".tools/**",
      "node_modules/**",
      "playwright-report/**",
      "test-results/**",
      ".lighthouseci/**",
      "lighthouse-report/**",
    ],
  },
  {
    files: ["app.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        ...globals.browser,
      },
    },
    rules: browserRules,
  },
  {
    files: ["playwright.config.mjs", "eslint.config.mjs", "scripts/**/*.mjs", "tests/**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: nodeRules,
  },
];
