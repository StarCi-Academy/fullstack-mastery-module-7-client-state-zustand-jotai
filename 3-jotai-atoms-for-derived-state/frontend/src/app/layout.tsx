import type { ReactNode } from "react"
import "./globals.css"
import { HeroUIProvider } from "@/components/providers"

/**
 * Root layout — Jotai dùng default store toàn cục, không bắt buộc Provider.
 * (EN: Root layout — Jotai uses a global default store; Provider is optional.)
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
    title: "M7 L3 — Jotai atoms for derived state",
}
