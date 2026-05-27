"use client"

import { Card, Chip, Avatar } from "@heroui/react"
import { useRef } from "react"
import { useCounterStore, selectCount } from "../lib"

/**
 * Component A — subscribe selector count, mỗi lần render tự đếm bằng ref.
 * (EN: Component A — subscribes to count selector, counts its own renders via a ref.)
 */
export function CounterDisplay(): JSX.Element {
    // Selector chỉ trả về count → component re-render khi count thay đổi.
    // (EN: Selector returns count only → component re-renders only when count changes.)
    const count = useCounterStore(selectCount)

    // Đếm số lần component render bằng useRef để không trigger re-render thêm.
    // (EN: Count this component's renders via useRef so we don't trigger more renders.)
    const renderRef = useRef(0)
    renderRef.current += 1

    return (
        <Card
            data-testid="display-a"
            className="border border-default-200/60 rounded-large p-5"
        >
            <Card.Header className="flex items-center justify-between gap-3 p-0">
                <div className="flex items-center gap-3">
                    <Avatar color="accent" size="sm">A</Avatar>
                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-foreground">
                            Component A
                        </span>
                        <span className="text-xs text-default-500">
                            subscribes to <code>count</code>
                        </span>
                    </div>
                </div>
                <Chip color="accent" variant="soft" size="sm">selector</Chip>
            </Card.Header>
            <Card.Content className="flex flex-col gap-4 pt-4 p-0">
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
                <div className="flex items-center justify-between rounded-medium bg-default-100 px-3 py-2">
                    <span className="text-sm text-default-600">Renders (A)</span>
                    <span
                        data-testid="render-a"
                        className="text-sm font-semibold tabular-nums text-foreground"
                    >
                        {renderRef.current}
                    </span>
                </div>
            </Card.Content>
        </Card>
    )
}
