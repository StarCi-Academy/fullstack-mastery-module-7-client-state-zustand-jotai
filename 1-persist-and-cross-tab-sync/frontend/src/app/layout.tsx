import type { ReactNode } from "react"
import "./globals.css"
import { HeroUIProvider } from "@/components/providers"

/**
 * Root layout — không cần Provider (store sống ở module scope).
 * (EN: Root layout — no Provider (store lives at module scope).)
 */
export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <html lang="en">
            <body>
                <HeroUIProvider>
                    {children}
                </HeroUIProvider>
            </body>
        </html>
    )
}

export const metadata = {
    title: "M7 L1 — Persist and cross-tab sync",
}
