import React from 'react';
import { connect } from'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems,selectCartItemsTotal } from '../../redux/cart/cart.selector';
import CheckoutItems from '../../components/CheckoutItem/checkoutItem.component';
import StripeCheckoutButton from "../../components/StripeButton/StripeButton.component";
import './checkoutPage.style.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>            
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItems key={cartItem.id} cartItem={cartItem}/>)
        }
        <div className='total'>
            TOTAL: ${ total }
        </div>
        <div className='test-warning'>
            *Please use the following information for testing*
            <br/>
            Card: <strong>4242 4242 4242 4242</strong> &nbsp;Exp: <strong>01/22</strong> &nbsp;CVV: <strong>123</strong>
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);