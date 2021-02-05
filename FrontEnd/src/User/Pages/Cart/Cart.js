import Button from '../../../SharedComponents/UIComponent/Button/Button'
import StripeCheckout from 'react-stripe-checkout';
import React, { useEffect } from 'react';
import './Cart.css';
import Productlist from '../../../SharedComponents/Products/Productlist/Productlist';
import { useStateValue } from '../../../StateProvider/StateProvider';

const Cart = () => {
  const isCart = true;
  const [state, dispatch] = useStateValue();
  const total = state.cart.reduce((accumulator, product) => {
    return (accumulator = accumulator + parseInt(product.price));
  }, 0);
  const keepCartSummary = () => {
    dispatch({
      type: 'KEEP_CART_SUMMARY',
      cartSummary: {
        total: total,
        items: state.cart.length,
      },
    });
  };

  const emptyCart = () => {
    dispatch({
      type: 'EMPTY_CART',
    });
  };
  
  const makePayment = (token) => {
    const body = {
      token,
      cartSummary,
    };
    const headers = {
      'Content-Type': 'application/json',
    };

    return fetch(`http://localhost:5000/payment`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log('Response ', response);
        const { status } = response;
        console.log('STATUS ', status);
        createOrder();
        emptyCart();
        /*if (status === 200) {
          createOrder();
          emptyCart();
          history.push('/orders');
        }*/
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='cart'>
      <Productlist isCart={isCart} />
      <div className='cart__Summary'>
        <div className='total__items'>Items: {state.cart.length}</div>
        <div className='total__price'>Price: {total}</div>
      </div>
      <div className='checkoutpage__Button'>
              <StripeCheckout
                stripeKey='pk_test_51HZDOcHKFvH5Oe64NcisIbwlEP1GXpFzpIWKhNeM6Qj6rgbFsHfxwJNFHyFXXtkfSosJZsbq2hLBE1nUWJMOmyl700jMbS2Mwn'
                token={makePayment}
                name='Card Info'
                currency='USD'
                amount={cartSummary.total * 100}>
                <Button
                  message='Pay with card'
                  //onClick={createOrder}
                  />
              </StripeCheckout>
            </div>
    </div>
  );
};

export default Cart;
