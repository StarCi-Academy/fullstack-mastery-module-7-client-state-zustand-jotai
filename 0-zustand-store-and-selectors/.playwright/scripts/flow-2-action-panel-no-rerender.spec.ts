import { test, expect } from "@playwright/test"

/**
 * Luồng 2 — ActionPanel KHÔNG re-render khi count thay đổi.
 * (EN: Flow 2 — ActionPanel does NOT re-render when count changes.)
 *
 * Mỗi component đếm số lần render bằng useRef. Sau 3 click +1, render-b vẫn = 1.
 * (EN: Each component counts its own renders via useRef. After 3 +1 clicks render-b is still 1.)
 */
test("flow 2 — action panel render count stays 1 after 3 increments", async ({ page }) => {
    // Bước 1: navigate (EN: Step 1: navigate)
    await page.goto("/")

    // Bước 2: ghi nhận render-b ban đầu (EN: Step 2: capture initial render-b)
    const initialB = await page.getByTestId("render-b").innerText()

    // Bước 3: bấm 3 lần +1 (EN: Step 3: click +1 three times)
    await page.getByTestId("btn-inc").click()
    await page.getByTestId("btn-inc").click()
    await page.getByTestId("btn-inc").click()

    // Bước 4: count tăng nhưng render-b giữ nguyên (EN: count grows, render-b unchanged)
    await expect(page.getByTestId("count-value")).toHaveText("3")
    await expect(page.getByTestId("render-b")).toHaveText(initialB)
})
