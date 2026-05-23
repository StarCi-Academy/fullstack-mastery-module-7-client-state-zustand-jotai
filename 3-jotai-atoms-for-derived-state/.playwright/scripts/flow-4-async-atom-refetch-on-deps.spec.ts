import { test, expect } from "@playwright/test"

/**
 * Luồng 4 — Đổi counterAtom thì async atom re-run (id thay đổi).
 * (EN: Flow 4 — When counterAtom changes, the async atom re-runs (id updates).)
 */
test("flow 4 — async atom re-runs when its dependency changes", async ({ page }) => {
    // Bước 1: navigate + chờ lần load đầu tiên xong
    // (EN: Step 1: navigate + wait for first load)
    await page.goto("/")
    await expect(page.getByTestId("async-user-loaded")).toBeVisible({ timeout: 10_000 })
    await page.getByTestId("btn-reset").click()
    // Sau reset, async refetch → id=1 (counter+1).
    // (EN: After reset, async refetches → id=1 (counter+1).)
    await expect(page.getByTestId("async-user-loaded")).toContainText("id=1", { timeout: 10_000 })

    // Bước 2: +1 → counter=1 → async refetch → id=2
    // (EN: Step 2: +1 → counter=1 → async refetch → id=2)
    await page.getByTestId("btn-inc").click()
    await expect(page.getByTestId("async-user-loaded")).toContainText("id=2", { timeout: 10_000 })

    // Bước 3: +1 → counter=2 → id=3 (EN: Step 3: +1 → counter=2 → id=3)
    await page.getByTestId("btn-inc").click()
    await expect(page.getByTestId("async-user-loaded")).toContainText("id=3", { timeout: 10_000 })
})
