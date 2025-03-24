import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest, // добавляем глобальные переменные Jest
      },
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      jest: pluginJest,
    },
    rules: {
      // Здесь вы можете добавить или переопределить правила Jest
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/consistent-test-it": ["error", { fn: "test", withinDescribe: "it" }],
      "no-sparse-arrays": 0,
      // Добавьте другие правила по необходимости
    },
  },
];