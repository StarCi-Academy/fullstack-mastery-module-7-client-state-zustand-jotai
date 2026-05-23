import { UserPanel, CartPanel, ThemePanel } from "../components"

/**
 * Trang chính — render 3 panel cho 3 slice user/cart/theme.
 * (EN: Main page — renders 3 panels for the user/cart/theme slices.)
 */
export default function Home(): JSX.Element {
    return (
        <main>
            <h1>M7 L2 — Slices pattern for large stores</h1>
            <UserPanel />
            <CartPanel />
            <ThemePanel />
        </main>
    )
}
