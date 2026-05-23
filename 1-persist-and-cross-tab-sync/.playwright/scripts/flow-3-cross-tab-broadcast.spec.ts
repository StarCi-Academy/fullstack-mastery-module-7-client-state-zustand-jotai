import { test, expect } from "@playwright/test"

/**
 * Luồng 3 — update ở tab 1 → tab 2 reflect qua BroadcastChannel.
 * (EN: Flow 3 — update in tab 1 reflects in tab 2 via BroadcastChannel.)
 */
test("flow 3 — increment in tab 1 propagates to tab 2", async ({ context, page }) => {
    // Bước 1: tab 1 reset (EN: Step 1: tab 1 reset)
    await page.goto("/")
    await page.getByTestId("btn-reset").click()
    await expect(page.getByTestId("count-value")).toHaveText("0")

    // Bước 2: mở tab 2 và đảm bảo cũng = 0 (EN: Step 2: open tab 2, expect 0)
    const tab2 = await context.newPage()
    await tab2.goto("/")
    await expect(tab2.getByTestId("count-value")).toHaveText("0")

    // Bước 3: bấm +1 ở tab 1 → tab 2 phải update (EN: Step 3: click +1 in tab 1 → tab 2 updates)
    await page.getByTestId("btn-inc").click()
    await expect(page.getByTestId("count-value")).toHaveText("1")
    // tab 2 đồng bộ qua BroadcastChannel (EN: tab 2 syncs via BroadcastChannel)
    await expect(tab2.getByTestId("count-value")).toHaveText("1", { timeout: 5_000 })
})
