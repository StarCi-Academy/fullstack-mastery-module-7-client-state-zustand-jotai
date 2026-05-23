import type { ReactNode } from "react"

/**
 * Root layout — Zustand không cần Provider, store là module-level singleton.
 * (EN: Root layout — Zustand needs no Provider; store is a module-level singleton.)
 */
export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

export const metadata = {
    title: "M7 L0 — Zustand store and selectors",
}
