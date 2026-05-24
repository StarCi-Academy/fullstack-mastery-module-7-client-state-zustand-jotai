"use client"
import { Button } from "@heroui/react"

import { useAtom } from "jotai"
import { counterAtom } from "../lib"

/**
 * Component counter — dùng useAtom để đọc/ghi atom primitive.
 * (EN: Counter component — useAtom to read/write the primitive atom.)
 */
export function CounterAtom(): JSX.Element {
    const [count, setCount] = useAtom(counterAtom)
    return (
        <section data-testid="counter-atom">
            <h2>Primitive atom</h2>
            <p>
                count: <span data-testid="count-value">{count}</span>
            </p>
            <Button data-testid="btn-inc" onPress={(): void => setCount((c) => c + 1)}>
                +1
            </Button>
            <Button data-testid="btn-dec" onPress={(): void => setCount((c) => c - 1)}>
                -1
            </Button>
            <Button data-testid="btn-reset" onPress={(): void => setCount(0)}>
                reset
            </Button>
        </section>
    )
}
