// SPDX-FileCopyrightText: 2026 mucookul <mucookul@gmail.com>
//
// SPDX-License-Identifier: AGPL-3.0-only

import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import robotsTxt from "astro-robots-txt";
import sitemap from "astro-sitemap";
import astroExpressiveCode from "astro-expressive-code";

export default defineConfig({
    site: "https://www.mookul.dev",
    integrations: [
        robotsTxt(),
        sitemap(),
        astroExpressiveCode({
            themes: ["github-light-default", "github-dark-default"],
            useDarkModeMediaQuery: false,
            themeCssSelector: (theme) =>
                theme.type === "dark" ? ".dark" : false,
            styleOverrides: {
                uiFontFamily: "var(--font-sans)",
                codeFontFamily: "var(--font-mono)",
            },
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Lexend Deca",
            cssVariable: "--astro-sans",
        },
        {
            provider: fontProviders.fontsource(),
            name: "Cascadia Code",
            cssVariable: "--astro-mono",
        },
    ],
});
