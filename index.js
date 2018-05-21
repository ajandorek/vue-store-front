const express = require('express');
const mongoose = require('mongoose');
require('./models/Items');

const app = express();
const Item = mongoose.model('items');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

mongoose.connect('mongodb://localhost:27017/storefront');

app.get('/', (req, res) => {
  res.send('It works!');
});

app.post('/api/add_product', (req, res) => {
  Item.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    productId: req.body.productId,
    department: req.body.department
  }).then(obj => res.json(obj));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
