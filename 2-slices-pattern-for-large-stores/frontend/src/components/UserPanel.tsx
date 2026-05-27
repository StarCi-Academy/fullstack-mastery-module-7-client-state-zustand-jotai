"use client"

import { Avatar, Button, Card, Chip } from "@heroui/react"
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
        <Card
            data-testid="user-panel"
            className="border border-default-200/60 rounded-large p-5"
        >
            <Card.Header className="flex items-center justify-between gap-3 p-0">
                <div className="flex items-center gap-3">
                    <Avatar color="accent" size="sm">
                        {user ? user.name.charAt(0) : "G"}
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-foreground">
                            User slice
                        </span>
                        <span className="text-xs text-default-500">auth state</span>
                    </div>
                </div>
                <Chip
                    color={user ? "success" : "default"}
                    variant="soft"
                    size="sm"
                >
                    {user ? "signed-in" : "guest"}
                </Chip>
            </Card.Header>
            <Card.Content className="flex flex-col gap-4 pt-4 p-0">
                <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-wide text-default-500">
                        Current user
                    </span>
                    <span
                        data-testid="user-name"
                        className="text-2xl font-semibold text-foreground"
                    >
                        {user ? user.name : "guest"}
                    </span>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Button
                        data-testid="btn-login"
                        variant="primary"
                        onPress={(): void => login(1, "Alice")}
                    >
                        login as Alice
                    </Button>
                    <Button
                        data-testid="btn-logout"
                        variant="danger-soft"
                        onPress={logout}
                    >
                        logout
                    </Button>
                </div>
            </Card.Content>
        </Card>
    )
}
