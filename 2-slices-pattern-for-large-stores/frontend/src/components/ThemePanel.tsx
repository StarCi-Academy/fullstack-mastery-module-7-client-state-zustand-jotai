"use client"

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
            <button data-testid="btn-toggle-theme" onClick={toggleTheme}>
                toggle theme
            </button>
        </section>
    )
}
