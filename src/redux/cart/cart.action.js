import {cartActionTypes} from './cart.type';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItems = item => ({
    type: cartActionTypes.ADD_ITEMS,
    payload: item 
});

export const clearItemFromCart = item => ({
    type: cartActionTypes.CLEAR_ITEMS_FROM_CART,
    payload: item
});

export const removeCartItem = item => ({
    type: cartActionTypes.REMOVE_CART_ITEM,
    payload: item
})