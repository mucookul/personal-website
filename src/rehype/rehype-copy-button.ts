// SPDX-FileCopyrightText: 2026 mucookul <mucookul@gmail.com>
//
// SPDX-License-Identifier: AGPL-3.0-only

import type { Root } from "hast";
import { visit } from "unist-util-visit";
import { h } from "hastscript";
import { isElement } from "hast-util-is-element";

function rehypeCopyButton(): (tree: Root) => void {
    return (tree) => {
        visit(tree, "element", (node, index, parent) => {
            if (
                !parent ||
                typeof index !== "number" ||
                !isElement(node, "pre") ||
                !node.children.some((child) => isElement(child, "code"))
            )
                return;

            const wrapper = h("div", { "data-pre-wrapper": true }, [
                node,
                h("button", { "data-copy-button": true }, "Copy"),
            ]);
            parent.children[index] = wrapper;
        });
    };
}

export default rehypeCopyButton;
