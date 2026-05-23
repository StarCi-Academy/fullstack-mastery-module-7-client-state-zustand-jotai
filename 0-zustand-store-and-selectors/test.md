# Test flows for 0-zustand-store-and-selectors

## Flow 1 — Increment updates display
**Purpose:** Verify the basic Zustand state update path — `set((s) => ({ count: s.count + 1 }))` propagates to a subscribed selector.
**Playwright file:** `.playwright/scripts/flow-1-increment-updates-display.spec.ts`
**Run:** `npm run test:e2e -- .playwright/scripts/flow-1-increment-updates-display.spec.ts`
**Pass criteria:** `count-value` reads `1` after a single `+1` click.

## Flow 2 — Action panel render count stays flat
**Purpose:** Prove selector-based subscriptions avoid re-renders when unrelated state changes (ActionPanel only subscribes to actions).
**Playwright file:** `.playwright/scripts/flow-2-action-panel-no-rerender.spec.ts`
**Run:** `npm run test:e2e -- .playwright/scripts/flow-2-action-panel-no-rerender.spec.ts`
**Pass criteria:** After 3 increments, `render-b` is identical to its initial value while `count-value` reaches `3`.

## Flow 3 — Reset clears count
**Purpose:** Verify the `reset` action restores the initial state.
**Playwright file:** `.playwright/scripts/flow-3-reset-clears-state.spec.ts`
**Run:** `npm run test:e2e -- .playwright/scripts/flow-3-reset-clears-state.spec.ts`
**Pass criteria:** `count-value` is `0` after pressing reset, regardless of prior count.

## Flow 4 — Decrement into negative
**Purpose:** Demonstrate that vanilla Zustand has no built-in guard — the store writes whatever the action computes (including negatives).
**Playwright file:** `.playwright/scripts/flow-4-decrement-into-negative.spec.ts`
**Run:** `npm run test:e2e -- .playwright/scripts/flow-4-decrement-into-negative.spec.ts`
**Pass criteria:** After clicking `-1` from 0, `count-value` reads `-1`.
