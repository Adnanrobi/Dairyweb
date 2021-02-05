import Service from '../../../services/services';
import React from 'react';
import Button from '../../UIComponent/Button/Button';
import { useStateValue } from '../../../StateProvider/StateProvider';
import './Product.css';

const Product = (props) => {
  const addTocart = 'ADD TO CART';
  const removeCart = 'Remove';
  const deleteProduct = 'Delete';
  const [state, dispatch] = useStateValue();

  const removeProduct = () => {
    Service.removeProduct(props.id)
      .then((response) => {
        dispatch({
          type: 'REMOVE_PRODUCT',
          id: props.id,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addCart = () => {
    dispatch({
      type: 'ADD_PRODUCT_TO_CART',
      product: {
        id: props.id,
        image: props.image,
        name: props.name,
        price: props.price,
        description: props.description,
      },
    });
  };
  const removeProductfromCart = () => {
    dispatch({
      type: 'REMOVE_PRODUCT_FROM_CART',
      id: props.id,
    });
    console.log(props.description);
  };

  var productButton;

  if (props.isAdmin) {
    productButton = (
      <div className='delete__button'>
        <Button
          message={deleteProduct}
          isAdmin={props.isAdmin}
          onClick={removeProduct}
        />
      </div>
    );
  } else if (props.isCart) {
    productButton = (
      <div className='add__cart__button'>
        <Button
          message={removeCart}
          isAdmin={props.isAdmin}
          onClick={removeProductfromCart}
        />
      </div>
    );
  } else {
    productButton = (
      <div className='add__cart__button'>
        <Button message={addTocart} isAdmin={props.isAdmin} onClick={addCart} />
      </div>
    );
  }

  return (
    <div className='Product'>
      <div className='product__card'>
        <div className='product__details'>
          <h1 className='product__title'>{props.name}</h1>
          <div className='product__recipe'>{props.description}</div>
          <div className='product__price'>Tk.{props.price}</div>
        </div>
        <div className='product__imageContainer'>
          <img className='product__image' src={props.image} alt='product' />
        </div>
        {productButton}
      </div>
    </div>
  );
};

export default Product;
