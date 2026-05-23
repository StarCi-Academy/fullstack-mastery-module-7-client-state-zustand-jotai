import { test, expect } from "@playwright/test"

/**
 * Luồng 3 — clearCart chỉ chạm slice cart, KHÔNG reset user/theme.
 * (EN: Flow 3 — clearCart only resets cart slice, NOT user or theme.)
 */
test("flow 3 — clear cart leaves user and theme intact", async ({ page }) => {
    // Bước 1: navigate, login, set theme dark, thêm 2 item
    // (EN: Step 1: navigate, login, set theme dark, add 2 items)
    await page.goto("/")
    await page.getByTestId("btn-login").click()
    await page.getByTestId("btn-toggle-theme").click()
    await page.getByTestId("btn-add-keyboard").click()
    await page.getByTestId("btn-add-keyboard").click()
    await expect(page.getByTestId("cart-count")).toHaveText("2")
    await expect(page.getByTestId("user-name")).toHaveText("Alice")
    await expect(page.getByTestId("theme-value")).toHaveText("dark")

    // Bước 2: clearCart (EN: Step 2: clearCart)
    await page.getByTestId("btn-clear-cart").click()

    // Bước 3: cart về 0 nhưng user/theme giữ nguyên
    // (EN: Step 3: cart → 0 but user/theme unchanged)
    await expect(page.getByTestId("cart-count")).toHaveText("0")
    await expect(page.getByTestId("user-name")).toHaveText("Alice")
    await expect(page.getByTestId("theme-value")).toHaveText("dark")
})
