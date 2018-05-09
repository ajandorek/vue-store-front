const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/storefront');

app.get('/', (req, res) => {
  res.send('It works!');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
