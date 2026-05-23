import { test, expect } from "@playwright/test"

/**
 * Luồng 3 — Async atom: fallback Suspense xuất hiện rồi resolve.
 * (EN: Flow 3 — Async atom: Suspense fallback appears then resolves.)
 */
test("flow 3 — async atom shows loading fallback then resolves", async ({ page }) => {
    // Bước 1: navigate — fallback "loading…" phải xuất hiện
    // (EN: Step 1: navigate — "loading…" fallback must appear)
    await page.goto("/")
    await expect(page.getByTestId("async-user-loading")).toBeVisible()

    // Bước 2: chờ resolve (800 ms) — loader biến mất, user data hiện
    // (EN: Step 2: wait for resolve (800 ms) — loader gone, user data visible)
    await expect(page.getByTestId("async-user-loaded")).toBeVisible({ timeout: 10_000 })
    await expect(page.getByTestId("async-user-loading")).not.toBeVisible()

    // Bước 3: nội dung chứa "User #" (EN: Step 3: content contains "User #")
    await expect(page.getByTestId("async-user-loaded")).toContainText("User #")
})
