"use client"

import { Avatar, Card, Chip, Spinner } from "@heroui/react"
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
        <div
            data-testid="async-user-loaded"
            className="flex flex-col gap-1 rounded-medium bg-default-100 px-3 py-3"
        >
            <span className="text-xs uppercase tracking-wide text-default-500">
                Fetched user
            </span>
            <span className="text-lg font-semibold text-foreground">
                id={user.id}, name={user.name}
            </span>
        </div>
    )
}

/**
 * Wrapper — bọc Suspense fallback cho component đọc async atom.
 * (EN: Wrapper — provides the Suspense fallback for the async-atom consumer.)
 */
export function AsyncUser(): JSX.Element {
    return (
        <Card
            data-testid="async-user"
            className="border border-default-200/60 rounded-large p-5"
        >
            <Card.Header className="flex items-center justify-between gap-3 p-0">
                <div className="flex items-center gap-3">
                    <Avatar color="warning" size="sm">A</Avatar>
                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-foreground">
                            Async atom
                        </span>
                        <span className="text-xs text-default-500">
                            + React Suspense
                        </span>
                    </div>
                </div>
                <Chip color="warning" variant="soft" size="sm">suspend</Chip>
            </Card.Header>
            <Card.Content className="pt-4 p-0">
                <Suspense
                    fallback={
                        <div
                            data-testid="async-user-loading"
                            className="flex items-center gap-3 rounded-medium bg-default-100 px-3 py-3"
                        >
                            <Spinner size="sm" color="warning" />
                            <span className="text-sm text-default-600">
                                loading…
                            </span>
                        </div>
                    }
                >
                    <AsyncUserInner />
                </Suspense>
            </Card.Content>
        </Card>
    )
}
