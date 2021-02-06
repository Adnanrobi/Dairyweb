import React, { useEffect } from 'react';
import OrderList from '../../../SharedComponents/Orders/OrderList/OrderList';
import { useStateValue } from '../../../StateProvider/StateProvider';
import Service from '../../../services/services';

const Orders = () => {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    retrieveOrders();
  }, []);
  
  const retrieveOrders = () => {
    Service.getOrderById(state.currentUser[0].id).then((response) => {
      console.log(response.data);
      dispatch({
        type: 'CREATE_ORDER',
        order: response.data,
      });
    });
    console.log(state.order);
  };
  return (
    <div className='orders'>
      <OrderList />
    </div>
  );
};

export default Orders;