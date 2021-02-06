import React from 'react';
import './Order.css';
 
const Order = (props) => {
    console.log(props.totalItem)
    console.log(props.userID)
  return (
    <div className='Order'>
      <div className='element'>
        OrderID: {props.orderID}
      </div>
      <div className='element'>UserID: {props.userID}</div>
      <div className='element'>Address: {props.address}</div>
      <div className='element'>Total Item: {props.items}</div>
      <div className='element'>Total Price: {props.totalPrice}</div>
      <div className='element'>Order Date: {props.date}</div>
    </div>
  );
};
 
export default Order;