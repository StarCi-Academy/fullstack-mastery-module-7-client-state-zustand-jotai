# Test flows for 2-slices-pattern-for-large-stores

## Flow 1 — Cart actions do not touch theme
**Purpose:** Demonstrate slice isolation — mutating the `cart` slice leaves the `theme` slice untouched.
**Playwright file:** `.playwright/scripts/flow-1-cart-does-not-touch-theme.spec.ts`
**Run:** `npm run test:e2e -- .playwright/scripts/flow-1-cart-does-not-touch-theme.spec.ts`
**Pass criteria:** After two `addItem` calls, `theme-value` still reads `light`.

## Flow 2 — User slice login/logout
**Purpose:** Verify the `user` slice exposes `login` / `logout` typed actions that mutate independently.
**Playwright file:** `.playwright/scripts/flow-2-user-login-flow.spec.ts`
**Run:** `npm run test:e2e -- .playwright/scripts/flow-2-user-login-flow.spec.ts`
**Pass criteria:** `user-name` cycles `guest → Alice → guest` matching the action sequence.

## Flow 3 — Clear cart leaves other slices intact
**Purpose:** Verify `clearCart` resets only `cart`, not `user` or `theme`.
**Playwright file:** `.playwright/scripts/flow-3-clear-cart-isolated.spec.ts`
**Run:** `npm run test:e2e -- .playwright/scripts/flow-3-clear-cart-isolated.spec.ts`
**Pass criteria:** After `clearCart`, `cart-count = 0` while `user-name = Alice` and `theme-value = dark`.

## Flow 4 — Toggle theme is isolated
**Purpose:** Verify `toggleTheme` flips `data-theme` and leaves `user` / `cart` defaults intact.
**Playwright file:** `.playwright/scripts/flow-4-theme-toggle-isolated.spec.ts`
**Run:** `npm run test:e2e -- .playwright/scripts/flow-4-theme-toggle-isolated.spec.ts`
**Pass criteria:** `[data-testid="theme-panel"][data-theme="dark"]` after click; `cart-count = 0`; `user-name = guest`.
