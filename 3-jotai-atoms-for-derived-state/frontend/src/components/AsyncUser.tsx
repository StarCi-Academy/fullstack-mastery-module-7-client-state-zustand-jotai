"use client"

import { Suspense } from "react"
import { useAtomValue } from "jotai"
import { asyncUserAtom } from "../lib"

/**
 * Inner component — đọc async atom; trigger Suspense khi pending.
 * (EN: Inner component — reads the async atom; triggers Suspense when pending.)
 */
function AsyncUserInner(): JSX.Element {
    const user = useAtomValue(asyncUserAtom)
    return (
        <p data-testid="async-user-loaded">
            id={user.id}, name={user.name}
        </p>
    )
}

/**
 * Wrapper — bọc Suspense fallback cho component đọc async atom.
 * (EN: Wrapper — provides the Suspense fallback for the async-atom consumer.)
 */
export function AsyncUser(): JSX.Element {
    return (
        <section data-testid="async-user">
            <h2>Async atom + Suspense</h2>
            <Suspense fallback={<p data-testid="async-user-loading">loading…</p>}>
                <AsyncUserInner />
            </Suspense>
        </section>
    )
}
