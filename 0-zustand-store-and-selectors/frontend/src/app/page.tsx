import { CounterDisplay, ActionPanel } from "../components"

/**
 * Trang chính — render hai component subscribe vào hai slice khác nhau của store.
 * (EN: Main page — renders two components subscribing to different slices of the store.)
 */
export default function Home(): JSX.Element {
    return (
        <main>
            <h1>M7 L0 — Zustand store & selectors</h1>
            <CounterDisplay />
            <ActionPanel />
        </main>
    )
}
