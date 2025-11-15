const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/vendorController');
const auth = require('../middleware/auth');

router.get('/', auth(['admin']), ctrl.list);
router.get('/:id', auth(['admin','vendor']), ctrl.get);
router.delete('/:id', auth(['admin']), ctrl.remove);

module.exports = router;
