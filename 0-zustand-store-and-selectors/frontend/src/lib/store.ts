import { create } from "zustand"

/**
 * Kiểu state của counter store — chỉ chứa số count và render-counter cho từng component.
 * (EN: Counter store state — holds count plus render counters per component for the selector demo.)
 */
export interface CounterState {
    count: number
    // Hai trường render-counter này được cập nhật từ UI để Playwright quan sát.
    // (EN: These two render-counter fields are updated from the UI so Playwright can observe.)
    renderCountA: number
    renderCountB: number
    increment: () => void
    decrement: () => void
    reset: () => void
    bumpRenderA: () => void
    bumpRenderB: () => void
}

/**
 * Store Zustand đơn — single source of truth cho cả ứng dụng.
 * (EN: Single Zustand store — single source of truth for the whole app.)
 *
 * Lưu ý: actions được đặt cùng state để dễ truy cập qua selector.
 * (EN: Note: actions live alongside state so they can be accessed via selectors.)
 */
export const useCounterStore = create<CounterState>((set) => ({
    count: 0,
    renderCountA: 0,
    renderCountB: 0,
    increment: (): void => set((s) => ({ count: s.count + 1 })),
    decrement: (): void => set((s) => ({ count: s.count - 1 })),
    reset: (): void => set({ count: 0, renderCountA: 0, renderCountB: 0 }),
    bumpRenderA: (): void => set((s) => ({ renderCountA: s.renderCountA + 1 })),
    bumpRenderB: (): void => set((s) => ({ renderCountB: s.renderCountB + 1 })),
}))

/**
 * Selector lấy count — re-render khi count thay đổi.
 * (EN: count selector — re-renders only when count changes.)
 */
export const selectCount = (s: CounterState): number => s.count

/**
 * Selector lấy increment action — không bao giờ thay đổi nên không re-render.
 * (EN: increment action selector — never changes, so the consumer never re-renders.)
 */
export const selectIncrement = (s: CounterState): (() => void) => s.increment
