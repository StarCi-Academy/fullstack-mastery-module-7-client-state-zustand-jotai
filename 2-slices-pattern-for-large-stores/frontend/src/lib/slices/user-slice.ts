import type { StateCreator } from "zustand"

/**
 * Slice user — chứa thông tin user và action liên quan.
 * (EN: User slice — holds user info and related actions.)
 */
export interface UserSlice {
    user: {
        id: number
        name: string
    } | null
    login: (id: number, name: string) => void
    logout: () => void
}

/**
 * Tạo slice user — nhận `set` và trả về state + action.
 * (EN: Create user slice — receives `set` and returns state + actions.)
 *
 * StateCreator generic dùng intersection để chia sẻ kiểu giữa các slice (xem combined-store).
 * (EN: StateCreator generic uses intersection to share types across slices, see combined-store.)
 */
export const createUserSlice: StateCreator<
    UserSlice,
    [],
    [],
    UserSlice
> = (set) => ({
    user: null,
    login: (id: number, name: string): void => set({ user: { id, name } }),
    logout: (): void => set({ user: null }),
})
