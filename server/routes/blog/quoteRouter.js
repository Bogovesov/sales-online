const Router = require('express');
const quoteController = require('../../controller/blog/quoteController');

const router = new Router();

router.post('/', quoteController.create);
router.get('/', quoteController.getAll);
router.get('/:id', quoteController.getOne);
router.delete('/:id', quoteController.deleteOne);
router.delete('/', quoteController.deleteAll);
router.patch('/:id', quoteController.updateOne);
router.patch('/', quoteController.update);

module.exports = router