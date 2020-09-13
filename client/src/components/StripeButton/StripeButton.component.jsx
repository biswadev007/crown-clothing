import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import swal from 'sweetalert';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_PJpdczq6HNMjf264zp1hjNEm00EhxWvdTZ';

    const onToken = token => {
        // console.log(token);return;
        axios({
            url: "api/payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token
            }
        })
        .then(resp => {
            swal({
                text: "Your payment is successful",
                icon: "success",
                button: "ok",
              });
        })
        .catch(err => {
            console.log("Error: ", err);
            swal({
                text: "Your payment is not successful",
                button: "ok",
              });
        });
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CROWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;