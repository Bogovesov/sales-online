const Router = require('express');
const orderController = require('../controller/orderController');
const authMiddleware = require('../middleware/authMiddleware');

const router = new Router();

router.post('/', orderController.create);
router.get('/', orderController.getAll);
router.get('/:id', orderController.getOne);
router.delete('/:id', orderController.deleteOne)
router.delete('/', orderController.deleteAll)

module.exports = router