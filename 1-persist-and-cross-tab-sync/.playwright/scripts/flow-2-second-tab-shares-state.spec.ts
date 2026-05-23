import { test, expect } from "@playwright/test"

/**
 * Luồng 2 — Mở tab thứ hai cùng context → cùng giá trị count.
 * (EN: Flow 2 — open a second tab in same context → shares the count.)
 */
test("flow 2 — second tab in same context loads persisted value", async ({ context, page }) => {
    // Bước 1: tab 1 — reset rồi tăng 2 (EN: Step 1: tab 1 — reset then +2)
    await page.goto("/")
    await page.getByTestId("btn-reset").click()
    await page.getByTestId("btn-inc").click()
    await page.getByTestId("btn-inc").click()
    await expect(page.getByTestId("count-value")).toHaveText("2")

    // Bước 2: mở tab 2 cùng context (chia sẻ localStorage) — count phải = 2
    // (EN: Step 2: open tab 2 in same context (shares localStorage) — count must be 2)
    const tab2 = await context.newPage()
    await tab2.goto("/")
    await expect(tab2.getByTestId("count-value")).toHaveText("2")
})
