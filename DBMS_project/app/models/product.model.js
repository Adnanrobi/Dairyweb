const sql = require("./db.js");

// constructor
const Product = function(product){
    this.name = product.name;
    this.price = product.price;
    this.image = product.image;
    this.description = product.description;
};

Product.getAll = result => {
    sql.query("SELECT * FROM PRODUCTS",(err, res) =>{
        if(err){
            console.log("error: ",err);
            result(null, err);
            return;
        }
        
        console.log("products: ",res);
        result(null,res);
    });
};

Product.add = (newProduct, result) => {
    sql.query('INSERT INTO PRODUCTS SET ?', newProduct, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      console.log('created product: ', { id: res.insertId, ...newProduct });
      result(null, { id: res.insertId, ...newProduct });
    });
  };

Product.remove = (id, result) => {
    sql.query('DELETE FROM PRODUCTS WHERE id = ?', id, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        //not found product with the id
        result({ kind: 'not_found' }, null);
        return;
      }
      console.log('deleted product with id: ', id);
      result(null, res);
    });
 };  

module.exports = Product;