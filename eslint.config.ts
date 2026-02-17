// Copyright (C) 2026 mucookul
// SPDX-License-Identifier: AGPL-3.0-only

import eslint from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig(
    eslint.configs.recommended,
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    ...eslintPluginAstro.configs.recommended,
    eslintConfigPrettier,
    {
        languageOptions: {
            parserOptions: {
                project: true,
            },
        },
    },
    globalIgnores([".astro/", "dist/"]),
);
