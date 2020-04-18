import {cartActionTypes} from './cart.type';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItems = item => ({
    type: cartActionTypes.ADD_ITEMS,
    payload: item 
})