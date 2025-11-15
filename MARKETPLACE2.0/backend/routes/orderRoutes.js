const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/orderController');
const auth = require('../middleware/auth');

router.get('/', auth(['admin','vendor']), ctrl.list);
router.post('/', ctrl.create);
router.put('/:id/status', auth(['admin','vendor']), ctrl.updateStatus);

module.exports = router;
