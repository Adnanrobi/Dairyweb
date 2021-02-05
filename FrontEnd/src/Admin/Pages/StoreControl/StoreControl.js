import { useStateValue } from '../../../StateProvider/StateProvider';
import Service from '../../../services/services';
import React,{useEffect} from 'react';
import './StoreControl.css';
import Logo from '../../../SharedComponents/UIComponent/Logo/Logo';
import Form from '../../Components/Form/Form';
import ProductsDisplay from '../../Components/ProductsDisplay/ProductsDisplay';

const StoreControl = () => {

  const [{ products }, dispatch] = useStateValue();
  useEffect(() => {
    retrieveProducts();
  }, []);

  const retrieveProducts = () => {
    Service.getAllProducts()
      .then((responses) => {
        console.log(responses.data);
        dispatch({
          type: 'RETRIEVE_PRODUCTS',
          product: responses.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className='StoreControl'>
      <div className='StoreControl__Logo'>
        <Logo />
      </div>
      <Form />
      <ProductsDisplay />
    </div>
  );
};



export default StoreControl;
