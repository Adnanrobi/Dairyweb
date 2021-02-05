import React from 'react';
import Product from '../Product/Product';
import './Productslist.css';
import { v4 as uuidv4 } from 'uuid';
import { useStateValue } from '../../../StateProvider/StateProvider';

const Productlist = (props) => {
  const [{ products, cart }, dispatch] = useStateValue();
  console.log(products);

  return (
    <div className='productList'>
      {props.isCart ? (
        <div className='productList'>
          {cart.map((product) => (
            <Product
              key={uuidv4()}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
              isAdmin={props.isAdmin}
              isCart={props.isCart}
            />
          ))}
        </div>
      ) : (
        <div className='productList'>
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
              isAdmin={props.isAdmin}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Productlist;
