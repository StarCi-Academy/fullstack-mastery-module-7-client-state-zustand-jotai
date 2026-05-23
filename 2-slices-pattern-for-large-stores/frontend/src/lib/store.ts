import { create } from "zustand"
import {
    type UserSlice,
    type CartSlice,
    type ThemeSlice,
    createUserSlice,
    createCartSlice,
    createThemeSlice,
} from "./slices"

/**
 * Kiểu store hợp nhất — intersection của 3 slice giữ type-safety toàn vẹn.
 * (EN: Combined store type — intersection of 3 slices keeps full type safety.)
 */
export type AppState = UserSlice & CartSlice & ThemeSlice

/**
 * Store Zustand kết hợp — spread mỗi slice creator để gộp state + action.
 * (EN: Combined Zustand store — spread each slice creator to merge state + actions.)
 *
 * Quan trọng: các slice không biết về nhau, vẫn type-safe nhờ generic intersection.
 * (EN: Important: slices don't know about each other, yet remain type-safe via the generic intersection.)
 */
export const useAppStore = create<AppState>()((...a) => ({
    ...createUserSlice(...a),
    ...createCartSlice(...a),
    ...createThemeSlice(...a),
}))
