import Service from '../../../services/services';
import { useStateValue } from '../../../StateProvider/StateProvider';
import React, { useEffect } from 'react';
import OrderList from '../../../SharedComponents/Orders/OrderList/OrderList';
import Logo from '../../../SharedComponents/UIComponent/Logo/Logo';

const AdminOrders = () => {

    const [state, dispatch] = useStateValue();

  useEffect(() => {retrieveOrders();}, []);

    const retrieveOrders = () => {
        Service.getAllOrders().then((response) => {
          console.log(response.data);
          dispatch({
            type: 'CREATE_ORDER',
            order: response.data,
          });
        });
        console.log(state.order);
      };

  return (
    <div>
        <div className='StoreControl__Logo'>
        <Logo />
      </div>
      <OrderList />
    </div>
    
  );
};

export default AdminOrders;