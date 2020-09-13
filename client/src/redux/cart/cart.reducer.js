import { cartActionTypes } from './cart.type';
import { addItemsToCart, removeItemsFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEMS:
            return {
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeItemsFromCart(state.cartItems, action.payload)
            }
        case cartActionTypes.CLEAR_ITEMS_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }
        case cartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
}