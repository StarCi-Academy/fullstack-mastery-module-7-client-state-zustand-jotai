import type { ReactNode } from "react"

/**
 * Root layout — không Provider; store là module singleton.
 * (EN: Root layout — no Provider; store is module singleton.)
 */
export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

export const metadata = {
    title: "M7 L2 — Slices pattern",
}
