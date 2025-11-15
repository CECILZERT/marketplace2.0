const Vendor = require('../models/Vendor');
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.registerVendor = async (req, res) => {
  try {
    const v = new Vendor(req.body);
    await v.save();
    res.json({message:'Vendor created'});
  } catch (err){ res.status(400).json({error: err.message}) }
};

exports.login = async (req, res) => {
  const { email, password, role } = req.body;
  const Model = role === 'admin' ? Admin : Vendor;
  const user = await Model.findOne({ email });
  if (!user) return res.status(400).json({message:'Invalid cred'});
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(400).json({message:'Invalid cred'});
  const token = jwt.sign({ id: user._id, role: role || 'vendor' }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.json({ token });
};
