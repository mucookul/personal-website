/* Copyright (C) 2026 mucookul */
/* SPDX-License-Identifier: AGPL-3.0-only */

import type { Root, Element } from "hast";
import { visit } from "unist-util-visit";
import { h } from "hastscript";

function rehypeCopyButton(): (tree: Root) => void {
    return (tree) => {
        visit(tree, "element", (node, index, parent) => {
            if (typeof index !== "number") return;

            if (!parent) return;

            if (node.tagName !== "pre") return;

            const child = node.children[0] as Element | undefined;
            if (child?.tagName !== "code") return;

            const wrapper = h("div", { class: "code-wrapper" }, [
                node,
                h("button", { class: "copy-btn", type: "button" }, "Copy"),
            ]);

            parent.children[index] = wrapper;
        });
    };
}

export default rehypeCopyButton;
