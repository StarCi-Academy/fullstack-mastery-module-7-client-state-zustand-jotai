"use client"

import { Avatar, Button, Card, Chip } from "@heroui/react"
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
        <Card
            data-testid="cross-tab-counter"
            className="border border-default-200/60 rounded-large p-5"
        >
            <Card.Header className="flex items-center justify-between gap-3 p-0">
                <div className="flex items-center gap-3">
                    <Avatar color="accent" size="sm">P</Avatar>
                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-foreground">
                            Persisted counter
                        </span>
                        <span className="text-xs text-default-500">
                            localStorage + BroadcastChannel
                        </span>
                    </div>
                </div>
                <Chip color="accent" variant="soft" size="sm">cross-tab</Chip>
            </Card.Header>
            <Card.Content className="flex flex-col gap-5 pt-4 p-0">
                <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-wide text-default-500">
                        Current count
                    </span>
                    <span
                        data-testid="count-value"
                        className="text-4xl font-bold tabular-nums text-foreground"
                    >
                        {count}
                    </span>
                </div>
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
                <p className="rounded-medium bg-default-100 px-3 py-2 text-sm text-default-600">
                    Mở trang này ở một tab khác và bấm các nút — counter sẽ đồng bộ ngay
                    lập tức qua BroadcastChannel.
                </p>
            </Card.Content>
        </Card>
    )
}
