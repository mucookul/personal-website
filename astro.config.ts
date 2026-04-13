// Copyright (C) 2026 mucookul
// SPDX-License-Identifier: AGPL-3.0-only

import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import robotsTxt from "astro-robots-txt";
import sitemap from "astro-sitemap";

import { remarkAlert } from "remark-github-blockquote-alert";
import rehypeCopyButton from "./src/rehype/rehype-copy-button.ts";

export default defineConfig({
    site: "https://www.mookul.dev",
    integrations: [robotsTxt(), sitemap()],
    markdown: {
        remarkPlugins: [remarkAlert],
        rehypePlugins: [rehypeCopyButton],
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
            provider: fontProviders.local(),
            name: "LexendDeca",
            cssVariable: "--font-lexend-deca",
            options: {
                variants: [
                    {
                        src: ["./src/assets/fonts/LexendDeca.woff2"],
                        weight: "100 900",
                        style: "normal",
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: "CascadiaCode",
            cssVariable: "--font-cascadia-code",
            options: {
                variants: [
                    {
                        src: ["./src/assets/fonts/CascadiaCode.woff2"],
                        weight: "100 900",
                        style: "normal",
                    },
                ],
            },
        },
    ],
});
