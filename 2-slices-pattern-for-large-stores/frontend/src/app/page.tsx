import { UserPanel, CartPanel, ThemePanel } from "../components"

/**
 * Trang chính — render 3 panel cho 3 slice user/cart/theme.
 * (EN: Main page — renders 3 panels for the user/cart/theme slices.)
 */
export default function Home(): JSX.Element {
    return (
        <main className="mx-auto max-w-6xl p-6 sm:p-10">
            <header className="mb-8 flex flex-col gap-2">
                <p className="text-sm font-medium uppercase tracking-wide text-accent">
                    Fullstack Mastery · Module 7 · Lesson 2
                </p>
                <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
                    Slices pattern for large stores
                </h1>
                <p className="max-w-2xl text-default-500">
                    Compose 3 slice độc lập (user · cart · theme) vào một store Zustand
                    duy nhất bằng <code className="rounded bg-default-100 px-1">StateCreator</code>.
                    Mỗi panel chỉ subscribe slice của mình — slice khác đổi không gây re-render.
                </p>
            </header>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <UserPanel />
                <CartPanel />
                <ThemePanel />
            </div>
        </main>
    )
}
