"use client"

import { Avatar, Button, Card, Chip } from "@heroui/react"
import { useRef } from "react"
import { useCounterStore } from "../lib"

/**
 * Component B — chỉ subscribe action (không đổi reference) → KHÔNG re-render khi count đổi.
 * (EN: Component B — subscribes only to actions (stable refs) → does NOT re-render when count changes.)
 */
export function ActionPanel(): JSX.Element {
    // Lấy 3 action — Zustand giữ reference ổn định, nên selector này không gây re-render.
    // (EN: Pick three actions — Zustand keeps stable refs so this selector does not cause re-renders.)
    const increment = useCounterStore((s) => s.increment)
    const decrement = useCounterStore((s) => s.decrement)
    const reset = useCounterStore((s) => s.reset)

    // Đếm số lần render — chỉ tăng khi B thực sự render.
    // (EN: Count renders — only increments when B actually renders.)
    const renderRef = useRef(0)
    renderRef.current += 1

    return (
        <Card
            data-testid="action-panel"
            className="border border-default-200/60 rounded-large p-5"
        >
            <Card.Header className="flex items-center justify-between gap-3 p-0">
                <div className="flex items-center gap-3">
                    <Avatar color="success" size="sm">B</Avatar>
                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-foreground">
                            Component B
                        </span>
                        <span className="text-xs text-default-500">
                            subscribes to actions only
                        </span>
                    </div>
                </div>
                <Chip color="success" variant="soft" size="sm">stable refs</Chip>
            </Card.Header>
            <Card.Content className="flex flex-col gap-4 pt-4 p-0">
                <div className="flex flex-wrap gap-2">
                    <Button data-testid="btn-inc" variant="primary" onPress={increment}>
                        +1
                    </Button>
                    <Button data-testid="btn-dec" variant="outline" onPress={decrement}>
                        -1
                    </Button>
                    <Button data-testid="btn-reset" variant="ghost" onPress={reset}>
                        reset
                    </Button>
                </div>
                <div className="flex items-center justify-between rounded-medium bg-default-100 px-3 py-2">
                    <span className="text-sm text-default-600">Renders (B)</span>
                    <span
                        data-testid="render-b"
                        className="text-sm font-semibold tabular-nums text-foreground"
                    >
                        {renderRef.current}
                    </span>
                </div>
            </Card.Content>
        </Card>
    )
}
