"use client"

import { useEffect } from "react"
import { useCounterStore, attachCrossTabSync } from "../lib"

/**
 * Counter có persist + cross-tab sync.
 * (EN: Counter with persist + cross-tab sync.)
 *
 * useEffect attach listener BroadcastChannel; cleanup khi unmount.
 * (EN: useEffect attaches the BroadcastChannel listener; cleans up on unmount.)
 */
export function CrossTabCounter(): JSX.Element {
    const count = useCounterStore((s) => s.count)
    const increment = useCounterStore((s) => s.increment)
    const decrement = useCounterStore((s) => s.decrement)
    const reset = useCounterStore((s) => s.reset)

    useEffect(() => {
        // Khởi tạo subscriber khi mount; cleanup khi unmount.
        // (EN: Init the subscriber on mount; clean up on unmount.)
        const detach = attachCrossTabSync()
        return detach
    }, [])

    return (
        <section data-testid="cross-tab-counter">
            <h2>Persisted counter (open this page in another tab)</h2>
            <p>
                Count: <span data-testid="count-value">{count}</span>
            </p>
            <button data-testid="btn-inc" onClick={increment}>
                +1
            </button>
            <button data-testid="btn-dec" onClick={decrement}>
                -1
            </button>
            <button data-testid="btn-reset" onClick={reset}>
                reset
            </button>
        </section>
    )
}
