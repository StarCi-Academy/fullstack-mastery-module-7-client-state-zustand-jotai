# fullstack-mastery-module-7-client-state-zustand-jotai

Fullstack Mastery — Module 7: Client State with Zustand & Jotai (FE-primary, no backend).

4 lessons:

- `0-zustand-store-and-selectors` — basic store + selector-based subscriptions.
- `1-persist-and-cross-tab-sync` — persist middleware + BroadcastChannel cross-tab sync.
- `2-slices-pattern-for-large-stores` — slices pattern with typed actions.
- `3-jotai-atoms-for-derived-state` — Jotai atoms + derived + async + Suspense.

Each lesson is a single Next.js project (port 3001) with Playwright at lesson root (`.playwright/`).

Run any lesson:

```bash
cd <L>-<slug>/frontend
npm install
npm run dev
```

Run Playwright (in a second terminal, with `npm run dev` already running):

```bash
cd <L>-<slug>/frontend
npm run test:e2e
```
