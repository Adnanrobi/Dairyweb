import http from '../http-common';

const addNewUser = (data) => {
    return http.post('/customers', data);
};
  
const getAllUser = () => {
    return http.get('/customers');
};
const addNewProduct = (data) => {
  return http.post('/products', data);
};

const removeProduct = (id) => {
  return http.delete(`/products/${id}`);
};

const getAllProducts = () => {
  return http.get('/products');
};

export default {
    addNewUser,
    getAllUser,
    addNewProduct,
    removeProduct,
    getAllProducts
}

