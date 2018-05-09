const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  productId: Number,
  department: String
});

mongoose.model('items', itemSchema);
