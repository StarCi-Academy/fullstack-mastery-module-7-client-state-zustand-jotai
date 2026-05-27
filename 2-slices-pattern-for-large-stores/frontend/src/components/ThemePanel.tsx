"use client"

import { Avatar, Button, Card, Chip } from "@heroui/react"
import { useAppStore } from "../lib"

/**
 * Panel theme — toggle demo cho slice theme.
 * (EN: Theme panel — toggle demo for the theme slice.)
 */
export function ThemePanel(): JSX.Element {
    const theme = useAppStore((s) => s.theme)
    const toggleTheme = useAppStore((s) => s.toggleTheme)

    return (
        <Card
            data-testid="theme-panel"
            data-theme={theme}
            className="border border-default-200/60 rounded-large p-5"
        >
            <Card.Header className="flex items-center justify-between gap-3 p-0">
                <div className="flex items-center gap-3">
                    <Avatar color="warning" size="sm">T</Avatar>
                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-foreground">
                            Theme slice
                        </span>
                        <span className="text-xs text-default-500">UI mode</span>
                    </div>
                </div>
                <Chip
                    color={theme === "dark" ? "accent" : "warning"}
                    variant="soft"
                    size="sm"
                >
                    {theme}
                </Chip>
            </Card.Header>
            <Card.Content className="flex flex-col gap-4 pt-4 p-0">
                <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-wide text-default-500">
                        Current theme
                    </span>
                    <span
                        data-testid="theme-value"
                        className="text-2xl font-semibold capitalize text-foreground"
                    >
                        {theme}
                    </span>
                </div>
                <Button
                    data-testid="btn-toggle-theme"
                    variant="primary"
                    onPress={toggleTheme}
                >
                    toggle theme
                </Button>
            </Card.Content>
        </Card>
    )
}
