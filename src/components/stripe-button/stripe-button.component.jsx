import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

//import './stripe-button.scss'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_M2d8RIOjGFSvjlNVQzwB77mJ001D0PHQUV';

    const onToken = token => {
        console.log(token)

        alert('Payment was successful')
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name="CRWN Clothing LTD."
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey}
        >

        </StripeCheckout>
    )
}

export default StripeCheckoutButton;