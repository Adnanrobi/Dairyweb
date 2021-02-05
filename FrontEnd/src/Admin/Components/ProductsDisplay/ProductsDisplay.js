import React from 'react';
import ProductsList from '../../../SharedComponents/Products/Productlist/Productlist';
const ProductsDisplay = () => {
  const isAdmin = true;
  return (
    <div>
      <ProductsList isAdmin={isAdmin} />
    </div>
  );
};

export default ProductsDisplay;
