const express = require('express');
const mongoose = require('mongoose');
require('./models/Items');

const app = express();
const Item = mongoose.model('items');
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/storefront');

app.get('/', (req, res) => {
  res.send('It works!');
});

app.post('/api/add_product', (req, res) => {
  Item.create({
    name: 'Test',
    description: 'Test',
    price: 100,
    productId: 1,
    department: 'Sports'
  }).then(obj => res.json(obj));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
