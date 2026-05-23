"use client"

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
            <button data-testid="btn-inc" onClick={(): void => setCount((c) => c + 1)}>
                +1
            </button>
            <button data-testid="btn-dec" onClick={(): void => setCount((c) => c - 1)}>
                -1
            </button>
            <button data-testid="btn-reset" onClick={(): void => setCount(0)}>
                reset
            </button>
        </section>
    )
}
