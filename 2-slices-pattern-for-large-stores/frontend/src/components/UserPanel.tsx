"use client"
import { Button } from "@heroui/react"

import { useAppStore } from "../lib"

/**
 * Panel user — login/logout demo cho slice user.
 * (EN: User panel — login/logout demo for the user slice.)
 */
export function UserPanel(): JSX.Element {
    const user = useAppStore((s) => s.user)
    const login = useAppStore((s) => s.login)
    const logout = useAppStore((s) => s.logout)

    return (
        <section data-testid="user-panel">
            <h2>User slice</h2>
            <p data-testid="user-name">{user ? user.name : "guest"}</p>
            <Button data-testid="btn-login" onClick={(): void => login(1, "Alice")}>
                login as Alice
            </Button>
            <Button data-testid="btn-logout" onClick={logout}>
                logout
            </Button>
        </section>
    )
}
