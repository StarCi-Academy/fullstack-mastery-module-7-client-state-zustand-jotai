import { test, expect } from "@playwright/test"

/**
 * Luồng 1 — reload trang restore state từ localStorage.
 * (EN: Flow 1 — reload restores state from localStorage.)
 */
test("flow 1 — after reload count value persists", async ({ page }) => {
    // Bước 1: navigate, reset để có baseline (EN: Step 1: navigate, reset baseline)
    await page.goto("/")
    await page.getByTestId("btn-reset").click()

    // Bước 2: tăng 3 lần (EN: Step 2: increment 3 times)
    await page.getByTestId("btn-inc").click()
    await page.getByTestId("btn-inc").click()
    await page.getByTestId("btn-inc").click()
    await expect(page.getByTestId("count-value")).toHaveText("3")

    // Bước 3: reload và kiểm tra (EN: Step 3: reload and verify)
    await page.reload()
    await expect(page.getByTestId("count-value")).toHaveText("3")
})
