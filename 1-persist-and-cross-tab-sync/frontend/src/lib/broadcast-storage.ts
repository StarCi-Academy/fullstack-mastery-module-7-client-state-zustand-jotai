import type { StateStorage } from "zustand/middleware"

/**
 * Adapter localStorage + BroadcastChannel — ghi vào localStorage và phát message cho các tab khác.
 * (EN: localStorage + BroadcastChannel adapter — writes to localStorage and broadcasts to other tabs.)
 *
 * Lý do: Zustand persist mặc định dùng localStorage nhưng không sync giữa tab.
 * Adapter này gói thêm BroadcastChannel để mọi tab nhận update gần real-time.
 * (EN: Zustand persist defaults to localStorage but doesn't sync across tabs.
 * This adapter wraps BroadcastChannel so every tab receives near real-time updates.)
 */
const CHANNEL_NAME = "fs-m7-l1-counter-sync"

let channel: BroadcastChannel | null = null

function getChannel(): BroadcastChannel | null {
    // SSR guard — BroadcastChannel chỉ tồn tại trên browser.
    // (EN: SSR guard — BroadcastChannel only exists in the browser.)
    if (typeof window === "undefined") return null
    if (channel === null) {
        channel = new BroadcastChannel(CHANNEL_NAME)
    }
    return channel
}

/**
 * StateStorage adapter — đọc/ghi localStorage và broadcast khi ghi.
 * (EN: StateStorage adapter — reads/writes localStorage and broadcasts on write.)
 */
export const broadcastStorage: StateStorage = {
    getItem: (name: string): string | null => {
        if (typeof window === "undefined") return null
        return window.localStorage.getItem(name)
    },
    setItem: (name: string, value: string): void => {
        if (typeof window === "undefined") return
        window.localStorage.setItem(name, value)
        // Phát message cho tab khác (EN: broadcast to other tabs)
        getChannel()?.postMessage({ name, value })
    },
    removeItem: (name: string): void => {
        if (typeof window === "undefined") return
        window.localStorage.removeItem(name)
        getChannel()?.postMessage({ name, value: null })
    },
}

/**
 * Đăng ký listener — khi tab khác broadcast, gọi callback để store rehydrate.
 * (EN: Register a listener — when another tab broadcasts, run the callback so the store rehydrates.)
 */
export function subscribeBroadcast(cb: (msg: { name: string; value: string | null }) => void): () => void {
    const ch = getChannel()
    if (ch === null) return (): void => undefined
    const handler = (e: MessageEvent): void => cb(e.data as { name: string; value: string | null })
    ch.addEventListener("message", handler)
    return (): void => ch.removeEventListener("message", handler)
}
