import { test, expect } from "@playwright/test"

/**
 * Luồng 2 — Derived atom (double, parity) tính lại khi base đổi.
 * (EN: Flow 2 — Derived atoms (double, parity) recompute when the base changes.)
 */
test("flow 2 — derived atoms recompute when counter changes", async ({ page }) => {
    // Bước 1: navigate + chờ async load (EN: Step 1: navigate + wait async)
    await page.goto("/")
    await expect(page.getByTestId("async-user-loaded")).toBeVisible({ timeout: 10_000 })

    // Bước 2: reset → count=0, double=0, parity=even
    // (EN: Step 2: reset → count=0, double=0, parity=even)
    await page.getByTestId("btn-reset").click()
    await expect(page.getByTestId("double-value")).toHaveText("0")
    await expect(page.getByTestId("parity-value")).toHaveText("even")

    // Bước 3: +1 → count=1, double=2, parity=odd
    // (EN: Step 3: +1 → count=1, double=2, parity=odd)
    await page.getByTestId("btn-inc").click()
    await expect(page.getByTestId("double-value")).toHaveText("2")
    await expect(page.getByTestId("parity-value")).toHaveText("odd")

    // Bước 4: +1 → count=2, double=4, parity=even
    await page.getByTestId("btn-inc").click()
    await expect(page.getByTestId("double-value")).toHaveText("4")
    await expect(page.getByTestId("parity-value")).toHaveText("even")
})
