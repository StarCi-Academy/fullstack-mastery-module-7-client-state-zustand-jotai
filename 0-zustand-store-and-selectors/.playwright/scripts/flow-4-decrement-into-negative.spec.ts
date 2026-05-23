import { test, expect } from "@playwright/test"

/**
 * Luồng 4 — Decrement đi xuống số âm (mặc định Zustand không có guard).
 * (EN: Flow 4 — Decrement is allowed into negative numbers (no guard by default).)
 *
 * Mục đích: chứng minh state Zustand thuần là "viết gì lưu nấy" — guard logic phải tự thêm.
 * (EN: Purpose: prove vanilla Zustand stores what you write — guards must be added by the developer.)
 */
test("flow 4 — decrement from 0 produces -1 (no built-in guard)", async ({ page }) => {
    // Bước 1: navigate (EN: Step 1: navigate)
    await page.goto("/")
    await expect(page.getByTestId("count-value")).toHaveText("0")

    // Bước 2: bấm -1 từ 0 (EN: Step 2: click -1 starting at 0)
    await page.getByTestId("btn-dec").click()

    // Bước 3: giá trị phải là -1 (EN: Step 3: value should be -1)
    await expect(page.getByTestId("count-value")).toHaveText("-1")
})
