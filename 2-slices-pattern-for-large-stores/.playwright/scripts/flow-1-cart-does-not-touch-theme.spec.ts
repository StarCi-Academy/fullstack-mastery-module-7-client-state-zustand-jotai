import { test, expect } from "@playwright/test"

/**
 * Luồng 1 — Mutate slice cart KHÔNG ảnh hưởng giá trị slice theme.
 * (EN: Flow 1 — Mutating the cart slice does NOT touch the theme slice.)
 */
test("flow 1 — cart actions do not change theme value", async ({ page }) => {
    // Bước 1: navigate, đọc theme ban đầu (EN: Step 1: navigate, read initial theme)
    await page.goto("/")
    await expect(page.getByTestId("theme-value")).toHaveText("light")

    // Bước 2: thêm 2 item vào cart (EN: Step 2: add 2 items to the cart)
    await page.getByTestId("btn-add-keyboard").click()
    await page.getByTestId("btn-add-keyboard").click()
    await expect(page.getByTestId("cart-count")).toHaveText("2")

    // Bước 3: theme vẫn = "light" — slice isolation OK (EN: Step 3: theme still "light")
    await expect(page.getByTestId("theme-value")).toHaveText("light")
})
