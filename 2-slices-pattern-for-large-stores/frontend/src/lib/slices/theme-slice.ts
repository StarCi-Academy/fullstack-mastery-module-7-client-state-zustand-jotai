import type { StateCreator } from "zustand"

/**
 * Slice theme — light/dark mode + action toggle.
 * (EN: Theme slice — light/dark mode + toggle action.)
 */
export type ThemeMode = "light" | "dark"

export interface ThemeSlice {
    theme: ThemeMode
    setTheme: (mode: ThemeMode) => void
    toggleTheme: () => void
}

/**
 * Tạo slice theme.
 * (EN: Create theme slice.)
 */
export const createThemeSlice: StateCreator<
    ThemeSlice,
    [],
    [],
    ThemeSlice
> = (set) => ({
    theme: "light",
    setTheme: (mode: ThemeMode): void => set({ theme: mode }),
    toggleTheme: (): void =>
        set((s) => ({ theme: s.theme === "light" ? "dark" : "light" })),
})
