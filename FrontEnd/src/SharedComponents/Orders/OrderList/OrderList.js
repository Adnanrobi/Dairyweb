import React from 'react';
import Order from '../Order/Order';
import './OrderList.css';
import { useStateValue } from '../../../StateProvider/StateProvider';

const OrderList = () => {
  const [state, dispatch] = useStateValue();
  console.log(state.order)
  return (
    <div>

      {state.order[0]?.map((orders) => (
          <Order
            key={orders.orderID}
            orderID={orders.orderID}
            userID={orders.userID}
            address={orders.address}
            items={orders.totalItem}
            totalPrice={orders.totalPrice}
            date={orders.orderDate}
          />
        ))}

    </div>
  );
};

export default OrderList;