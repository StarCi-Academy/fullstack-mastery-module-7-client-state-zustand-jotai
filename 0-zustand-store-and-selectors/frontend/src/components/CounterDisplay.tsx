"use client"

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
        <section data-testid="display-a">
            <h2>Component A — subscribes to count</h2>
            <p>
                Count: <span data-testid="count-value">{count}</span>
            </p>
            <p>
                Render count A: <span data-testid="render-a">{renderRef.current}</span>
            </p>
        </section>
    )
}
