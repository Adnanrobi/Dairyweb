module.exports = (app) => {
    const stripe = require('stripe')(
      'sk_test_51IHNjNKgQbG1PPcW7AaG9a4yTg1grBp7QIxxNwminSKiu2dipUzQvVBe0VwZZa7CQcOwRG3j3n6MQfe0EvF1SSFy00b17KBcJ3'
    );
    const { v4: uuidv4 } = require('uuid');
  
    app.post('/payment', (req, res) => {
      const { cartSummary, token } = req.body;
      console.log('PRODUCT ', cartSummary);
      console.log('PRICE ', cartSummary.total);
      const idempotencyKey = uuidv4();
  
      return stripe.customers
        .create({
          email: token.email,
          source: token.id,
        })
        .then((customer) => {
          stripe.charges.create(
            {
              amount: cartSummary.total * 100,
              currency: 'usd',
              customer: customer.id,
              receipt_email: token.email,
            },
            { idempotencyKey }
          );
        })
  
        .then((result) => res.status(200).json(result))
        .catch((err) => console.log(err));
    });
  };