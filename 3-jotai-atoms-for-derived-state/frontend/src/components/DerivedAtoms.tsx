"use client"

import { Avatar, Card, Chip } from "@heroui/react"
import { useAtomValue } from "jotai"
import { doubleCounterAtom, parityAtom } from "../lib"

/**
 * Component derived — chỉ đọc qua useAtomValue (không setter).
 * (EN: Derived component — read-only via useAtomValue (no setter).)
 */
export function DerivedAtoms(): JSX.Element {
    const double = useAtomValue(doubleCounterAtom)
    const parity = useAtomValue(parityAtom)
    return (
        <Card
            data-testid="derived-atoms"
            className="border border-default-200/60 rounded-large p-5"
        >
            <Card.Header className="flex items-center justify-between gap-3 p-0">
                <div className="flex items-center gap-3">
                    <Avatar color="success" size="sm">D</Avatar>
                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-foreground">
                            Derived atoms
                        </span>
                        <span className="text-xs text-default-500">
                            depend on <code>counterAtom</code>
                        </span>
                    </div>
                </div>
                <Chip color="success" variant="soft" size="sm">read-only</Chip>
            </Card.Header>
            <Card.Content className="grid grid-cols-2 gap-4 pt-4 p-0">
                <div className="flex flex-col gap-1 rounded-medium bg-default-100 px-3 py-3">
                    <span className="text-xs uppercase tracking-wide text-default-500">
                        Double
                    </span>
                    <span
                        data-testid="double-value"
                        className="text-3xl font-bold tabular-nums text-foreground"
                    >
                        {double}
                    </span>
                </div>
                <div className="flex flex-col gap-1 rounded-medium bg-default-100 px-3 py-3">
                    <span className="text-xs uppercase tracking-wide text-default-500">
                        Parity
                    </span>
                    <span
                        data-testid="parity-value"
                        className="text-3xl font-semibold capitalize text-foreground"
                    >
                        {parity}
                    </span>
                </div>
            </Card.Content>
        </Card>
    )
}
