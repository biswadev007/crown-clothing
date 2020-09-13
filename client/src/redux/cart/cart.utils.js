export const addItemsToCart = (cartItems, addedCartItems) => {
    const existingItems = cartItems.find(cartItem =>
        cartItem.id === addedCartItems.id);

    if (existingItems) {
        return cartItems.map(cartItem =>
            cartItem.id === addedCartItems.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    return [...cartItems, { ...addedCartItems, quantity: 1 }];
}

export const removeItemsFromCart = (cartItems, cartItemToremove) => {
    const existingCartItem = cartItems.find(cartItem =>
        cartItem.id === cartItemToremove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToremove.id)
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToremove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
}