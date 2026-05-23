import { test, expect } from "@playwright/test"

/**
 * Luồng 1 — Tăng counterAtom thì UI cập nhật.
 * (EN: Flow 1 — Incrementing counterAtom updates the UI.)
 */
test("flow 1 — incrementing primitive atom updates count display", async ({ page }) => {
    // Bước 1: navigate, đợi async user load để Suspense fallback biến mất
    // (EN: Step 1: navigate, wait for async user to load so the Suspense fallback is gone)
    await page.goto("/")
    await expect(page.getByTestId("async-user-loaded")).toBeVisible({ timeout: 10_000 })

    // Bước 2: reset rồi +1 (EN: Step 2: reset then +1)
    await page.getByTestId("btn-reset").click()
    await expect(page.getByTestId("count-value")).toHaveText("0")
    await page.getByTestId("btn-inc").click()

    // Bước 3: assert count = 1 (EN: Step 3: assert count = 1)
    await expect(page.getByTestId("count-value")).toHaveText("1")
})
