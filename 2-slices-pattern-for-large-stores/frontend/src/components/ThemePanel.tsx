"use client"
import { Button } from "@heroui/react"

import { useAppStore } from "../lib"

/**
 * Panel theme — toggle demo cho slice theme.
 * (EN: Theme panel — toggle demo for the theme slice.)
 */
export function ThemePanel(): JSX.Element {
    const theme = useAppStore((s) => s.theme)
    const toggleTheme = useAppStore((s) => s.toggleTheme)

    return (
        <section data-testid="theme-panel" data-theme={theme}>
            <h2>Theme slice</h2>
            <p>
                Theme: <span data-testid="theme-value">{theme}</span>
            </p>
            <Button data-testid="btn-toggle-theme" onPress={toggleTheme}>
                toggle theme
            </Button>
        </section>
    )
}
