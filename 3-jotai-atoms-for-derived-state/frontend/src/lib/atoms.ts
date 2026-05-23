import { atom } from "jotai"

/**
 * Atom counter cơ sở — primitive atom, đọc/ghi giá trị number.
 * (EN: Base counter atom — primitive atom holding a number.)
 */
export const counterAtom = atom<number>(0)

/**
 * Atom derived — gấp đôi counterAtom, read-only.
 * (EN: Derived atom — twice the counterAtom value, read-only.)
 *
 * Jotai chỉ tính lại khi atom phụ thuộc đổi, và subscriber chỉ re-render khi giá trị derived đổi.
 * (EN: Jotai only recomputes when a dependency changes, and subscribers only re-render when the derived value changes.)
 */
export const doubleCounterAtom = atom<number>((get) => get(counterAtom) * 2)

/**
 * Atom derived — phân loại tính chẵn/lẻ.
 * (EN: Derived atom — parity classification.)
 */
export const parityAtom = atom<"even" | "odd">((get) =>
    get(counterAtom) % 2 === 0 ? "even" : "odd",
)

/**
 * User payload trả về từ async atom.
 * (EN: User payload returned by the async atom.)
 */
export interface AsyncUser {
    id: number
    name: string
}

/**
 * Atom async — giả lập gọi API trong 800 ms, trả về user dựa trên counter hiện tại.
 * (EN: Async atom — simulates an API call for 800 ms returning a user keyed by counter.)
 *
 * Suspense fallback hiện trong lúc promise pending, sau đó resolve và component hiện data.
 * (EN: Suspense fallback shows while the promise pends, then resolves and the component renders data.)
 */
export const asyncUserAtom = atom<Promise<AsyncUser>>(async (get) => {
    const id = get(counterAtom) + 1
    // Mô phỏng độ trễ mạng để Playwright quan sát fallback.
    // (EN: Simulate network latency so Playwright can observe the fallback.)
    await new Promise((resolve) => setTimeout(resolve, 800))
    return { id, name: `User #${id}` }
})
