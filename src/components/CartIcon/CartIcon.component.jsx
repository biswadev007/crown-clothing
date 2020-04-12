import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg.svg'

import './CartIcon.style.scss';

const CartIcon = () => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

export default CartIcon;