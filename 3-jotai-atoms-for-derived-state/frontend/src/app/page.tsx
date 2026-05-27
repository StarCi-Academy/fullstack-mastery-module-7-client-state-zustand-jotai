import { CounterAtom, DerivedAtoms, AsyncUser } from "../components"

/**
 * Trang chính — primitive atom + derived atom + async atom với Suspense.
 * (EN: Main page — primitive atom + derived atom + async atom with Suspense.)
 */
export default function Home(): JSX.Element {
    return (
        <main className="mx-auto max-w-6xl p-6 sm:p-10">
            <header className="mb-8 flex flex-col gap-2">
                <p className="text-sm font-medium uppercase tracking-wide text-accent">
                    Fullstack Mastery · Module 7 · Lesson 3
                </p>
                <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
                    Jotai atoms for derived state
                </h1>
                <p className="max-w-2xl text-default-500">
                    Lab Jotai: primitive atom drive derived atom (double + parity) và
                    async atom với Suspense. Counter đổi → Jotai re-run producer và
                    component re-suspend qua boundary.
                </p>
            </header>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <CounterAtom />
                <DerivedAtoms />
                <AsyncUser />
            </div>
        </main>
    )
}
