"use client"

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
        <section data-testid="cart-panel">
            <h2>Cart slice</h2>
            <p>
                Items: <span data-testid="cart-count">{items.length}</span>
            </p>
            <ul data-testid="cart-list">
                {items.map((i) => (
                    <li key={i.id} data-testid={`cart-item-${i.id}`}>
                        {i.name} × {i.quantity}
                    </li>
                ))}
            </ul>
            <button
                data-testid="btn-add-keyboard"
                onClick={(): void => addItem({ id: 101, name: "Keyboard", quantity: 1 })}
            >
                add keyboard
            </button>
            <button data-testid="btn-clear-cart" onClick={clearCart}>
                clear cart
            </button>
        </section>
    )
}
