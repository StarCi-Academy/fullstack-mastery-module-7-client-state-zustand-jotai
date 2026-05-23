import type { ReactNode } from "react"

/**
 * Root layout — Jotai dùng default store toàn cục, không bắt buộc Provider.
 * (EN: Root layout — Jotai uses a global default store; Provider is optional.)
 */
export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

export const metadata = {
    title: "M7 L3 — Jotai atoms for derived state",
}
