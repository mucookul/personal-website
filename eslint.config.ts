// SPDX-FileCopyrightText: 2026 mucookul <mucookul@gmail.com>
//
// SPDX-License-Identifier: AGPL-3.0-only

import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

import { tailwind4 } from "tailwind-csstree";

import eslintPluginAstro from "eslint-plugin-astro";
import css from "@eslint/css";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";

export default defineConfig([
    {
        settings: {
            "better-tailwindcss": {
                entryPoint: "src/styles/global.css",
            },
        },
    },
    {
        files: ["**/*.css"],
        language: "css/css",
        plugins: { css },
        languageOptions: {
            customSyntax: tailwind4,
            tolerant: true,
        },
        extends: ["css/recommended"],
        rules: {
            "css/use-baseline": "off", // I can't be bothered man
        },
    },
    {
        files: ["**/*.{ts,tsx,cts,mts}"],
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
        extends: [
            eslint.configs.recommended,
            tseslint.configs.strictTypeChecked,
            tseslint.configs.stylisticTypeChecked,
            eslintPluginBetterTailwindcss.configs.recommended,
        ],
    },
    {
        files: ["**/*.astro"],
        languageOptions: {
            parserOptions: {
                project: true,
            },
        },
        extends: [
            eslint.configs.recommended,
            tseslint.configs.strictTypeChecked,
            tseslint.configs.stylisticTypeChecked,
            ...eslintPluginAstro.configs.recommended,
            eslintPluginBetterTailwindcss.configs.recommended,
        ],
    },
    {
        files: ["**/*.{ts,tsx,cts,mts,astro}"],
        rules: {
            "better-tailwindcss/enforce-consistent-line-wrapping": "off",
            "better-tailwindcss/enforce-consistent-class-order": "off",
        },
    },
    {
        ignores: [".astro/**/*", "dist/**/*"],
    },
    eslintConfigPrettier,
]);
