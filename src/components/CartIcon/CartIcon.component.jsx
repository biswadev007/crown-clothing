import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg.svg'
import { toggleCartHidden } from '../../redux/cart/cart.action';

import './CartIcon.style.scss';

const CartIcon = ({ toggleCartHidden, totalCartItemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{totalCartItemCount}</span>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    totalCartItemCount: cartItems.reduce(
        (accumulatequantity, cartItem) => accumulatequantity + cartItem.quantity, 0
    )
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);