// Copyright (C) 2026 mucookul
// SPDX-License-Identifier: AGPL-3.0-only

import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import robotsTxt from "astro-robots-txt";
import sitemap from "astro-sitemap";

import cloudflare from "@astrojs/cloudflare";

import { remarkAlert } from "remark-github-blockquote-alert";
import rehypeCopyButton from "./src/rehype/rehype-copy-button.ts";

export default defineConfig({
    site: "https://www.mookul.dev",
    adapter: cloudflare(),
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
});
