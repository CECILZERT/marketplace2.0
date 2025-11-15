const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  products: [{ product: {type: mongoose.Schema.Types.ObjectId, ref:'Product'}, qty: Number }],
  total: Number,
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
  status: { type: String, default: 'pending' },
  createdAt: {type:Date, default:Date.now}
});
module.exports = mongoose.model('Order', orderSchema);
