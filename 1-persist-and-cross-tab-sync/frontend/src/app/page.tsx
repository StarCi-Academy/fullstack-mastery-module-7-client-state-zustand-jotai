import { CrossTabCounter } from "../components"

/**
 * Trang chính — chứa counter có persist.
 * (EN: Main page — hosts the persisted counter.)
 */
export default function Home(): JSX.Element {
    return (
        <main>
            <h1>M7 L1 — Persist & cross-tab sync</h1>
            <CrossTabCounter />
        </main>
    )
}
