const Router = require('express');
const productController = require('../controller/productController');
const authMiddleware = require('../middleware/authMiddleware');

const router = new Router();

router.post('/', productController.create);
router.get('/', productController.getAll);
router.get('/:id', productController.getOne);
router.delete('/:id', productController.deleteOne)
router.delete('/', productController.deleteAll)

module.exports = router