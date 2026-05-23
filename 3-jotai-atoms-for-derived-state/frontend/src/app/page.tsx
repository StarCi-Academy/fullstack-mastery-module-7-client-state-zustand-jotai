import { CounterAtom, DerivedAtoms, AsyncUser } from "../components"

/**
 * Trang chính — primitive atom + derived atom + async atom với Suspense.
 * (EN: Main page — primitive atom + derived atom + async atom with Suspense.)
 */
export default function Home(): JSX.Element {
    return (
        <main>
            <h1>M7 L3 — Jotai atoms for derived state</h1>
            <CounterAtom />
            <DerivedAtoms />
            <AsyncUser />
        </main>
    )
}
