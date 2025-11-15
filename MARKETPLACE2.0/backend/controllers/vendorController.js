const Vendor = require('../models/Vendor');
exports.list = async (req, res) => res.json(await Vendor.find());
exports.get = async (req, res) => res.json(await Vendor.findById(req.params.id));
exports.remove = async (req, res) => { await Vendor.findByIdAndDelete(req.params.id); res.json({message:'deleted'}); };
