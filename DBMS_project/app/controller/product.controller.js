const Product = require("../models/product.model.js");

exports.findAll = (req, res) => {
    Product.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };

  //create a new product
exports.add = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }
  //Create a product
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
  });

  //Save product in the database
  Product.add(product, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while adding the product.',
      });
    else res.send(data);
  });
};

//Delete product with a given id
exports.delete = (req, res) => {
  Product.remove(req.params.productId, (err, data) => {
    if (err) {
      if (err.kind == 'not_found') {
        res.status(404).send({
          message: `Not found Product with id ${req.params.productId}.`,
        });
      } else {
        res.status(500).send({
          message: 'Could not delete Product with id' + req.params.productId,
        });
      }
    } else res.send({ message: `Product was deleted successfully!` });
  });
};