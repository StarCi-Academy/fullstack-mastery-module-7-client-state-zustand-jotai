import { test, expect } from "@playwright/test"

/**
 * Luồng 1 — Tăng count thì display cập nhật.
 * (EN: Flow 1 — Incrementing count updates the display.)
 */
test("flow 1 — clicking +1 updates count display to 1", async ({ page }) => {
    // Bước 1: navigate (EN: Step 1: navigate)
    await page.goto("/")

    // Bước 2: giá trị ban đầu phải = 0 (EN: Step 2: initial value should be 0)
    await expect(page.getByTestId("count-value")).toHaveText("0")

    // Bước 3: click +1 và assert count = 1 (EN: Step 3: click +1, assert count = 1)
    await page.getByTestId("btn-inc").click()
    await expect(page.getByTestId("count-value")).toHaveText("1")
})
