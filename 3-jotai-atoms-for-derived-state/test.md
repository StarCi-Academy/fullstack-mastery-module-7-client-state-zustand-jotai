# Test flows for 3-jotai-atoms-for-derived-state

## Flow 1 — Atom increment propagates
**Purpose:** Verify the primitive `counterAtom` write path propagates to the UI via `useAtom`.
**Playwright file:** `.playwright/scripts/flow-1-atom-increment-propagates.spec.ts`
**Run:** `npm run test:e2e -- .playwright/scripts/flow-1-atom-increment-propagates.spec.ts`
**Pass criteria:** `count-value` reads `1` after one `+1` click on a freshly reset page.

## Flow 2 — Derived atoms recompute
**Purpose:** Verify `doubleCounterAtom` and `parityAtom` recompute reactively when `counterAtom` changes.
**Playwright file:** `.playwright/scripts/flow-2-derived-atom-recomputes.spec.ts`
**Run:** `npm run test:e2e -- .playwright/scripts/flow-2-derived-atom-recomputes.spec.ts`
**Pass criteria:** Across two `+1` clicks, `double-value` cycles `0 → 2 → 4` and `parity-value` cycles `even → odd → even`.

## Flow 3 — Async atom Suspense fallback
**Purpose:** Verify an async atom triggers React Suspense and resolves on its own.
**Playwright file:** `.playwright/scripts/flow-3-async-atom-suspense.spec.ts`
**Run:** `npm run test:e2e -- .playwright/scripts/flow-3-async-atom-suspense.spec.ts`
**Pass criteria:** `async-user-loading` is visible immediately after navigation; replaced by `async-user-loaded` containing `User #` within 10 s.

## Flow 4 — Async atom refetches on dependency change
**Purpose:** Verify that mutating a dependency atom (`counterAtom`) re-runs the async atom and updates its output.
**Playwright file:** `.playwright/scripts/flow-4-async-atom-refetch-on-deps.spec.ts`
**Run:** `npm run test:e2e -- .playwright/scripts/flow-4-async-atom-refetch-on-deps.spec.ts`
**Pass criteria:** After two `+1` clicks following a reset, `async-user-loaded` shows `id=1`, then `id=2`, then `id=3` (each within 10 s).
