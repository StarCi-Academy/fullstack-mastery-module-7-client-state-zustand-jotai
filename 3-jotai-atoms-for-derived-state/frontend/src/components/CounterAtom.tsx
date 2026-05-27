"use client"

import { Avatar, Button, Card, Chip } from "@heroui/react"
import { useAtom } from "jotai"
import { counterAtom } from "../lib"

/**
 * Component counter — dùng useAtom để đọc/ghi atom primitive.
 * (EN: Counter component — useAtom to read/write the primitive atom.)
 */
export function CounterAtom(): JSX.Element {
    const [count, setCount] = useAtom(counterAtom)
    return (
        <Card
            data-testid="counter-atom"
            className="border border-default-200/60 rounded-large p-5"
        >
            <Card.Header className="flex items-center justify-between gap-3 p-0">
                <div className="flex items-center gap-3">
                    <Avatar color="accent" size="sm">P</Avatar>
                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-foreground">
                            Primitive atom
                        </span>
                        <span className="text-xs text-default-500">
                            <code>counterAtom</code>
                        </span>
                    </div>
                </div>
                <Chip color="accent" variant="soft" size="sm">read · write</Chip>
            </Card.Header>
            <Card.Content className="flex flex-col gap-4 pt-4 p-0">
                <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-wide text-default-500">
                        Count
                    </span>
                    <span
                        data-testid="count-value"
                        className="text-4xl font-bold tabular-nums text-foreground"
                    >
                        {count}
                    </span>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Button
                        data-testid="btn-inc"
                        variant="primary"
                        onPress={(): void => setCount((c) => c + 1)}
                    >
                        +1
                    </Button>
                    <Button
                        data-testid="btn-dec"
                        variant="outline"
                        onPress={(): void => setCount((c) => c - 1)}
                    >
                        -1
                    </Button>
                    <Button
                        data-testid="btn-reset"
                        variant="ghost"
                        onPress={(): void => setCount(0)}
                    >
                        reset
                    </Button>
                </div>
            </Card.Content>
        </Card>
    )
}
