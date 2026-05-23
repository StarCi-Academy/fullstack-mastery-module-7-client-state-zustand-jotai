# Test flows for 1-persist-and-cross-tab-sync

## Flow 1 — Reload restores persisted state
**Purpose:** Verify that the persist middleware writes to localStorage and rehydrates the store on page reload.
**Playwright file:** `.playwright/scripts/flow-1-reload-restores-state.spec.ts`
**Run:** `npm run test:e2e -- .playwright/scripts/flow-1-reload-restores-state.spec.ts`
**Pass criteria:** After three increments + reload, `count-value` is `3`.

## Flow 2 — Second tab shares persisted value
**Purpose:** Verify that two tabs in the same browser context read the same persisted state on first load.
**Playwright file:** `.playwright/scripts/flow-2-second-tab-shares-state.spec.ts`
**Run:** `npm run test:e2e -- .playwright/scripts/flow-2-second-tab-shares-state.spec.ts`
**Pass criteria:** A second tab opened after tab 1 increments shows `count-value` equal to tab 1's value.

## Flow 3 — Cross-tab broadcast update
**Purpose:** Verify BroadcastChannel adapter propagates a tab 1 mutation into an already-open tab 2.
**Playwright file:** `.playwright/scripts/flow-3-cross-tab-broadcast.spec.ts`
**Run:** `npm run test:e2e -- .playwright/scripts/flow-3-cross-tab-broadcast.spec.ts`
**Pass criteria:** After tab 1 clicks `+1`, tab 2's `count-value` updates to the same value within 5 s.

## Flow 4 — Reset clears both tabs
**Purpose:** Verify a reset in any tab broadcasts and clears state across all open tabs.
**Playwright file:** `.playwright/scripts/flow-4-reset-broadcasts.spec.ts`
**Run:** `npm run test:e2e -- .playwright/scripts/flow-4-reset-broadcasts.spec.ts`
**Pass criteria:** After tab 1 resets, both tabs read `count-value = 0` within 5 s.
