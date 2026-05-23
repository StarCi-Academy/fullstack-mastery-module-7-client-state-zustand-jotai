import { test, expect } from "@playwright/test"

/**
 * Luồng 2 — Login/logout slice user và quan sát UI.
 * (EN: Flow 2 — User slice login/logout reflected in UI.)
 */
test("flow 2 — user slice login then logout updates user-name", async ({ page }) => {
    // Bước 1: navigate, đảm bảo guest (EN: Step 1: navigate, ensure guest)
    await page.goto("/")
    await expect(page.getByTestId("user-name")).toHaveText("guest")

    // Bước 2: login (EN: Step 2: login)
    await page.getByTestId("btn-login").click()
    await expect(page.getByTestId("user-name")).toHaveText("Alice")

    // Bước 3: logout (EN: Step 3: logout)
    await page.getByTestId("btn-logout").click()
    await expect(page.getByTestId("user-name")).toHaveText("guest")
})
