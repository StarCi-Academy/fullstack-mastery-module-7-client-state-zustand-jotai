import { test, expect } from "@playwright/test"

/**
 * Luồng 4 — reset ở một tab xoá state ở mọi tab khác qua broadcast.
 * (EN: Flow 4 — reset in one tab clears state in every other tab via broadcast.)
 */
test("flow 4 — reset in tab 1 clears tab 2", async ({ context, page }) => {
    // Bước 1: tab 1 tăng 4 (EN: Step 1: tab 1 +4)
    await page.goto("/")
    await page.getByTestId("btn-reset").click()
    for (let i = 0; i < 4; i++) await page.getByTestId("btn-inc").click()
    await expect(page.getByTestId("count-value")).toHaveText("4")

    // Bước 2: mở tab 2 phải đồng bộ = 4 (EN: Step 2: tab 2 syncs to 4)
    const tab2 = await context.newPage()
    await tab2.goto("/")
    await expect(tab2.getByTestId("count-value")).toHaveText("4")

    // Bước 3: bấm reset ở tab 1 — cả hai phải về 0
    // (EN: Step 3: reset in tab 1 — both should drop to 0)
    await page.getByTestId("btn-reset").click()
    await expect(page.getByTestId("count-value")).toHaveText("0")
    await expect(tab2.getByTestId("count-value")).toHaveText("0", { timeout: 5_000 })
})
