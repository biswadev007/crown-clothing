export const addItemsToCart = (cartItems, addedCartItems) => {
    const existingItems = cartItems.find(cartItem =>
        cartItem.id === addedCartItems.id);
    
        if(existingItems){
            return cartItems.map(cartItem => 
                cartItem.id === addedCartItems.id
                ? {...cartItem, quantity: cartItem.quantity +1}
                : cartItem
            );
        }
        return [...cartItems,{...addedCartItems, quantity: 1}];
}