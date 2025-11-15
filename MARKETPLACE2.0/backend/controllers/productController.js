const Product = require('../models/Product');

exports.create = async (req, res) => {
  const p = new Product(req.body);
  await p.save();
  res.json(p);
};

exports.list = async (req, res) => {
  const items = await Product.find().limit(50);
  res.json(items);
};

exports.get = async (req, res) => {
  const p = await Product.findById(req.params.id);
  res.json(p);
};

exports.update = async (req, res) => {
  const p = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(p);
};

exports.remove = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'deleted' });
};
