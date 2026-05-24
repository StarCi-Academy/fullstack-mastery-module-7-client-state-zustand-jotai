"use client"
import { Button } from "@heroui/react"

import { useRef } from "react"
import { useCounterStore } from "../lib"

/**
 * Component B — chỉ subscribe action (không đổi reference) → KHÔNG re-render khi count đổi.
 * (EN: Component B — subscribes only to actions (stable refs) → does NOT re-render when count changes.)
 */
export function ActionPanel(): JSX.Element {
    // Lấy 2 action — Zustand giữ reference ổn định, nên selector này không gây re-render.
    // (EN: Pick two actions — Zustand keeps stable refs so this selector does not cause re-renders.)
    const increment = useCounterStore((s) => s.increment)
    const decrement = useCounterStore((s) => s.decrement)
    const reset = useCounterStore((s) => s.reset)

    // Đếm số lần render — chỉ tăng khi B thực sự render.
    // (EN: Count renders — only increments when B actually renders.)
    const renderRef = useRef(0)
    renderRef.current += 1

    return (
        <section data-testid="action-panel">
            <h2>Component B — subscribes to actions only</h2>
            <Button data-testid="btn-inc" onPress={increment}>
                +1
            </Button>
            <Button data-testid="btn-dec" onPress={decrement}>
                -1
            </Button>
            <Button data-testid="btn-reset" onPress={reset}>
                reset
            </Button>
            <p>
                Render count B: <span data-testid="render-b">{renderRef.current}</span>
            </p>
        </section>
    )
}
