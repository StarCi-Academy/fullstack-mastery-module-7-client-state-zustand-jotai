import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { broadcastStorage, subscribeBroadcast } from "./broadcast-storage"

/**
 * State counter + persist via localStorage + broadcast cross-tab.
 * (EN: Counter state persisted to localStorage with cross-tab broadcasting.)
 */
export interface CounterState {
    count: number
    increment: () => void
    decrement: () => void
    reset: () => void
}

const STORAGE_KEY = "fs-m7-l1-counter"

/**
 * Store Zustand với middleware persist — ghi vào localStorage qua adapter broadcast.
 * (EN: Zustand store with persist middleware writing to localStorage via the broadcast adapter.)
 */
export const useCounterStore = create<CounterState>()(
    persist(
        (set) => ({
            count: 0,
            increment: (): void => set((s) => ({ count: s.count + 1 })),
            decrement: (): void => set((s) => ({ count: s.count - 1 })),
            reset: (): void => set({ count: 0 }),
        }),
        {
            name: STORAGE_KEY,
            storage: createJSONStorage(() => broadcastStorage),
        },
    ),
)

/**
 * Đăng ký subscriber broadcast — khi tab khác ghi, rehydrate store của tab hiện tại.
 * (EN: Register a broadcast subscriber — when another tab writes, rehydrate this tab's store.)
 *
 * Trả về cleanup function — gọi từ useEffect.
 * (EN: Returns a cleanup function — call from a useEffect.)
 */
export function attachCrossTabSync(): () => void {
    return subscribeBroadcast((msg) => {
        if (msg.name !== STORAGE_KEY) return
        // Khi tab khác xoá key → reset store. (EN: when another tab clears the key → reset store.)
        if (msg.value === null) {
            useCounterStore.setState({ count: 0 })
            return
        }
        // Khi tab khác ghi giá trị mới → rehydrate. (EN: when another tab writes new value → rehydrate.)
        useCounterStore.persist.rehydrate()
    })
}
