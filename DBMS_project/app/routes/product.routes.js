module.exports = app => {
    const products = require("../controller/product.controller.js");
// Retrieve all Products
app.get("/products", products.findAll);
//Add a new product
app.post("/products",products.add);
//Delete a Product with productID
app.delete('/products/:productId', products.delete);
}

