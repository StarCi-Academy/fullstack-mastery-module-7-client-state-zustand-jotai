import { test, expect } from "@playwright/test"

/**
 * Luồng 3 — reset action xoá count về 0.
 * (EN: Flow 3 — reset action clears count back to 0.)
 */
test("flow 3 — reset clears count to 0", async ({ page }) => {
    // Bước 1: navigate (EN: Step 1: navigate)
    await page.goto("/")

    // Bước 2: tăng 2 lần (EN: Step 2: increment twice)
    await page.getByTestId("btn-inc").click()
    await page.getByTestId("btn-inc").click()
    await expect(page.getByTestId("count-value")).toHaveText("2")

    // Bước 3: bấm reset (EN: Step 3: click reset)
    await page.getByTestId("btn-reset").click()
    await expect(page.getByTestId("count-value")).toHaveText("0")
})
