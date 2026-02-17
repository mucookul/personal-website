// Copyright (C) 2026 mucookul
// SPDX-License-Identifier: AGPL-3.0-only

import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "src/posts" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
    }),
});

export const collections = { blog };
