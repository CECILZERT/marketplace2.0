const Order = require('../models/Order');
exports.create = async (req, res) => res.json(await new Order(req.body).save());
exports.list = async (req, res) => res.json(await Order.find().populate('products.product'));
exports.updateStatus = async (req, res) => {
  const o = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
  res.json(o);
};
