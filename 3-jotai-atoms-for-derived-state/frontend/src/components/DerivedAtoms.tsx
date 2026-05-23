"use client"

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
        <section data-testid="derived-atoms">
            <h2>Derived atoms</h2>
            <p>
                double: <span data-testid="double-value">{double}</span>
            </p>
            <p>
                parity: <span data-testid="parity-value">{parity}</span>
            </p>
        </section>
    )
}
