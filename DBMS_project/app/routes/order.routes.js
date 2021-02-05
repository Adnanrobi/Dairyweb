module.exports = (app) => {
    const orders = require('../controller/order.controller');

    //Create a new order
    app.post('/orders', orders.create);

    // Retrieve all Orders
    app.get('/orders', orders.findAll);

    // Retrieve a single Order with useId
    app.get('/orders/:userID', orders.findOne);

};