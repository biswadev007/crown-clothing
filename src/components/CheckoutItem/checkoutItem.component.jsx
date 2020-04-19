import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItems, removeCartItem } from '../../redux/cart/cart.action'
import './checkoutItem.style.scss';

const CheckoutItems = ({ cartItem, clearItem, addItems, removeItem }) => {
    const { name, quantity, price, imageUrl } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=> removeItem(cartItem)}>&#10094;</div>
                    <span className='value'>{quantity}</span>
                <div className='arrow' onClick={()=> addItems(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10007;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItems: item => dispatch(addItems(item)),
    removeItem: item => dispatch(removeCartItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItems);