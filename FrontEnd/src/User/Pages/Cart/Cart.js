import Button from '../../../SharedComponents/UIComponent/Button/Button'
import StripeCheckout from 'react-stripe-checkout';
import React, { useEffect,useState } from 'react';
import './Cart.css';
import Productlist from '../../../SharedComponents/Products/Productlist/Productlist';
import { useStateValue } from '../../../StateProvider/StateProvider';
import Service from '../../../services/services';
import { v4 as uuidv4 } from 'uuid';

const Cart = () => {

  const orderid = uuidv4();
  const [address, setAddress] = useState("");
  const isCart = true;
  const [{ order, cart, cartSummary, currentUser }, dispatch] = useStateValue();
  const total = cart.reduce((accumulator, product) => {
    return (accumulator = accumulator + parseInt(product.price));
  }, 0);
  const keepCartSummary = () => {
    dispatch({
      type: 'KEEP_CART_SUMMARY',
      cartSummary: {
        total: total,
        items: cart.length,
      },
    });
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const createOrder = () => {
    var data = {
      userID: currentUser[0].id,
      address: address,
      totalItem: cart.length,
      totalPrice: total,
      delivered: 0,
    };
    Service.addOrder(data).then((response) => {
      console.log(response);
    });
  };

  const emptyCart = () => {
    dispatch({
      type: 'EMPTY_CART',
    });
  };
  
  const makePayment = (token) => {
    keepCartSummary()
    const body = {
      token,
      cartSummary,
    };
    const headers = {
      'Content-Type': 'application/json',
    };

    return fetch(`http://localhost:4000/payment`, {
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
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='cart'>
      <Productlist isCart={isCart} />
      <div className='checkout'>
      <div className='cart__Summary'>
        <div className='total__items'>Items: {cart.length}</div>
        <div className='total__price'>Price: {total}</div>
      </div>
      <div className='cart__input'>
          <div className='input__title'>Delivery Address</div>
          <input
            type='text'
            className='newProduct__input'
            id='description'
            name='description'
            placeholder='Enter Address'
            value={address}
            onChange={handleAddress}
          />
        </div>
      <div className='checkoutpage__Button'>
             <StripeCheckout
                stripeKey='pk_test_51IHNjNKgQbG1PPcWdxAI2z4OSEXhbx2BKZJI5CyuIS7LqhFGgRsnUBlkA3O4ygbiGrtZ8UgNVdcZiDnJT2GyXerc00wQfCQMq6'
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
    </div>
  );
};

export default Cart;
