import React,{useEffect} from 'react';
import Service from '../../../services/services';
import { useStateValue } from '../../../StateProvider/StateProvider';
import Productlist from '../../../SharedComponents/Products/Productlist/Productlist';
import './ProductsPage.css';


const ProductsPage = () => {
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
    <div className='ProductsPage'>
      <Productlist />
    </div>
  );
};

export default ProductsPage;
