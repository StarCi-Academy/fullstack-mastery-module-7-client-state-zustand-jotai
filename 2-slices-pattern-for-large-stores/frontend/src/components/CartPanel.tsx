"use client"

import { Avatar, Button, Card, Chip } from "@heroui/react"
import { useAppStore } from "../lib"

/**
 * Panel cart — add/clear demo cho slice cart.
 * (EN: Cart panel — add/clear demo for the cart slice.)
 */
export function CartPanel(): JSX.Element {
    const items = useAppStore((s) => s.items)
    const addItem = useAppStore((s) => s.addItem)
    const clearCart = useAppStore((s) => s.clearCart)

    return (
        <Card
            data-testid="cart-panel"
            className="border border-default-200/60 rounded-large p-5"
        >
            <Card.Header className="flex items-center justify-between gap-3 p-0">
                <div className="flex items-center gap-3">
                    <Avatar color="success" size="sm">C</Avatar>
                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-foreground">
                            Cart slice
                        </span>
                        <span className="text-xs text-default-500">line items</span>
                    </div>
                </div>
                <Chip color="success" variant="soft" size="sm">
                    <span data-testid="cart-count">{items.length}</span> items
                </Chip>
            </Card.Header>
            <Card.Content className="flex flex-col gap-4 pt-4 p-0">
                {items.length === 0 ? (
                    <div className="flex flex-col items-center gap-2 rounded-medium bg-default-100 px-3 py-6 text-center">
                        <span className="text-2xl">cart</span>
                        <span className="text-sm text-default-500">
                            Cart is empty — click below to add an item.
                        </span>
                    </div>
                ) : (
                    <ul
                        data-testid="cart-list"
                        className="flex flex-col gap-2 rounded-medium bg-default-100 p-3"
                    >
                        {items.map((i) => (
                            <li
                                key={i.id}
                                data-testid={`cart-item-${i.id}`}
                                className="flex items-center justify-between text-sm text-foreground"
                            >
                                <span>{i.name}</span>
                                <Chip color="default" variant="soft" size="sm">
                                    × {i.quantity}
                                </Chip>
                            </li>
                        ))}
                    </ul>
                )}
                <div className="flex flex-wrap gap-2">
                    <Button
                        data-testid="btn-add-keyboard"
                        variant="primary"
                        onPress={(): void =>
                            addItem({ id: 101, name: "Keyboard", quantity: 1 })
                        }
                    >
                        add keyboard
                    </Button>
                    <Button
                        data-testid="btn-clear-cart"
                        variant="danger-soft"
                        onPress={clearCart}
                    >
                        clear cart
                    </Button>
                </div>
            </Card.Content>
        </Card>
    )
}
