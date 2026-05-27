import { CrossTabCounter } from "../components"

/**
 * Trang chính — chứa counter có persist.
 * (EN: Main page — hosts the persisted counter.)
 */
export default function Home(): JSX.Element {
    return (
        <main className="mx-auto max-w-5xl p-6 sm:p-10">
            <header className="mb-8 flex flex-col gap-2">
                <p className="text-sm font-medium uppercase tracking-wide text-accent">
                    Fullstack Mastery · Module 7 · Lesson 1
                </p>
                <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
                    Persist &amp; cross-tab sync
                </h1>
                <p className="max-w-2xl text-default-500">
                    Lab persist Zustand state qua <code className="rounded bg-default-100 px-1">localStorage</code> + đồng bộ giữa
                    nhiều tab cùng origin bằng <code className="rounded bg-default-100 px-1">BroadcastChannel</code>. Mở thêm tab
                    rồi click để chứng kiến counter cập nhật song song.
                </p>
            </header>
            <CrossTabCounter />
        </main>
    )
}
