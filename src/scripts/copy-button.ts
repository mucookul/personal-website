/* Copyright (C) 2026 mucookul */
/* SPDX-License-Identifier: AGPL-3.0-only */

document.querySelectorAll(".copy-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const wrapper = button.parentElement;
        if (!wrapper) return;

        const code = wrapper.querySelector("pre code");
        if (!code?.textContent) return;

        void navigator.clipboard.writeText(code.textContent);
        button.textContent = "Copied!";

        setTimeout(() => {
            button.textContent = "Copy";
        }, 2000);
    });
});
