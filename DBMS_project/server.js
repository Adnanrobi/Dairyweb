const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
// parse requests of content-type: application/json
app.use(bodyParser.json({ limit: '50mb' }));

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Dairy-web" });
  });

  require("./app/routes/product.routes.js")(app);
  require('./app/routes/customer.routes')(app);
  require('./app/routes/order.routes')(app);

  // set port, listen for requests
app.listen(4000, () => {
    console.log("Server is running on port 4000.");
  });