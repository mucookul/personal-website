// Copyright (C) 2026 mucookul
// SPDX-License-Identifier: AGPL-3.0-only

import type { Config } from "prettier";

import * as prettierPluginAstro from "prettier-plugin-astro";
import * as prettierPluginTailwindcss from "prettier-plugin-tailwindcss";

const config: Config = {
    bracketSameLine: true,
    plugins: [prettierPluginAstro, prettierPluginTailwindcss],
    tabWidth: 4,
};

export default config;
