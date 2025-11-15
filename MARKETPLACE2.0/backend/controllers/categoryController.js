const Category = require('../models/Category');
exports.create = async (req, res) => res.json(await new Category(req.body).save());
exports.list = async (req, res) => res.json(await Category.find());
exports.remove = async (req, res) => { await Category.findByIdAndDelete(req.params.id); res.json({message:'deleted'}); };
