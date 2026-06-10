// SPDX-FileCopyrightText: 2026 mucookul <mucookul@gmail.com>
//
// SPDX-License-Identifier: AGPL-3.0-only

import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import robotsTxt from "astro-robots-txt";
import sitemap from "astro-sitemap";

import { unified } from "@astrojs/markdown-remark";
import { remarkAlert } from "remark-github-blockquote-alert";
import rehypeCopyButton from "./src/rehype/rehype-copy-button.ts";

export default defineConfig({
    site: "https://www.mookul.dev",
    integrations: [robotsTxt(), sitemap()],
    markdown: {
        processor: unified({
            remarkPlugins: [remarkAlert],
            rehypePlugins: [rehypeCopyButton],
        }),
        shikiConfig: {
            themes: {
                light: "ayu-light",
                dark: "ayu-dark",
            },
        },
    },
    vite: {
        plugins: [tailwindcss()],
    },
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Lexend Deca",
            cssVariable: "--font-lexend-deca",
        },
        {
            provider: fontProviders.fontsource(),
            name: "Cascadia Code",
            cssVariable: "--font-cascadia-code",
        },
    ],
});
