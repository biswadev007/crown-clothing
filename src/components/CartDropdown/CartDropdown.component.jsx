import React from 'react';

import CustomButton from '../CustomButton/CustomButton.component'

import './CartDropdown.style.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO AND CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;