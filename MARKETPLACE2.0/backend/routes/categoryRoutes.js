const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/categoryController');
const auth = require('../middleware/auth');

router.get('/', ctrl.list);
router.post('/', auth(['admin']), ctrl.create);
router.delete('/:id', auth(['admin']), ctrl.remove);

module.exports = router;
