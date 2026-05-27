import { CounterDisplay, ActionPanel } from "../components"

/**
 * Trang chính — render hai component subscribe vào hai slice khác nhau của store.
 * (EN: Main page — renders two components subscribing to different slices of the store.)
 */
export default function Home(): JSX.Element {
    return (
        <main className="mx-auto max-w-5xl p-6 sm:p-10">
            <header className="mb-8 flex flex-col gap-2">
                <p className="text-sm font-medium uppercase tracking-wide text-accent">
                    Fullstack Mastery · Module 7 · Lesson 0
                </p>
                <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
                    Zustand store &amp; selectors
                </h1>
                <p className="max-w-2xl text-default-500">
                    Lab quan sát selector subscription cô lập update — Component A re-render
                    theo <code className="rounded bg-default-100 px-1 text-foreground">count</code>{" "}
                    còn Component B subscribe vào action reference ổn định, không re-render.
                </p>
            </header>
            <div className="grid gap-6 md:grid-cols-2">
                <CounterDisplay />
                <ActionPanel />
            </div>
        </main>
    )
}
