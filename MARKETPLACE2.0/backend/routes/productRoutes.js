const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/productController');
const auth = require('../middleware/auth');

router.get('/', ctrl.list);
router.post('/', auth(['vendor','admin']), ctrl.create);
router.get('/:id', ctrl.get);
router.put('/:id', auth(['vendor','admin']), ctrl.update);
router.delete('/:id', auth(['admin']), ctrl.remove);

module.exports = router;
