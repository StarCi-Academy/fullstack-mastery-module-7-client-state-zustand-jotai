import type { StateCreator } from "zustand"

/**
 * Slice cart — chứa danh sách item và action mutate cart.
 * (EN: Cart slice — holds item list and cart-mutating actions.)
 */
export interface CartItem {
    id: number
    name: string
    quantity: number
}

export interface CartSlice {
    items: Array<CartItem>
    addItem: (item: CartItem) => void
    removeItem: (id: number) => void
    clearCart: () => void
}

/**
 * Tạo slice cart — nhận `set` (và optional `get`) để mutate.
 * (EN: Create cart slice — receives `set` (and optional `get`) to mutate.)
 */
export const createCartSlice: StateCreator<
    CartSlice,
    [],
    [],
    CartSlice
> = (set) => ({
    items: [],
    addItem: (item: CartItem): void =>
        set((s) => ({ items: [...s.items, item] })),
    removeItem: (id: number): void =>
        set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
    clearCart: (): void => set({ items: [] }),
})
