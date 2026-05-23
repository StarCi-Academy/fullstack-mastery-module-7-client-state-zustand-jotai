import { test, expect } from "@playwright/test"

/**
 * Luồng 4 — Toggle theme cập nhật data-theme và giữ nguyên cart/user.
 * (EN: Flow 4 — toggleTheme updates data-theme attr and leaves cart/user intact.)
 */
test("flow 4 — toggle theme flips data-theme attribute", async ({ page }) => {
    // Bước 1: navigate (EN: Step 1: navigate)
    await page.goto("/")
    const themePanel = page.getByTestId("theme-panel")
    await expect(themePanel).toHaveAttribute("data-theme", "light")

    // Bước 2: toggle (EN: Step 2: toggle)
    await page.getByTestId("btn-toggle-theme").click()
    await expect(themePanel).toHaveAttribute("data-theme", "dark")

    // Bước 3: cart và user vẫn ở giá trị mặc định
    // (EN: Step 3: cart and user still at default)
    await expect(page.getByTestId("cart-count")).toHaveText("0")
    await expect(page.getByTestId("user-name")).toHaveText("guest")
})
