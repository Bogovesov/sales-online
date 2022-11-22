const Router = require('express');
const contractController = require('../controller/contractController');
const authMiddleware = require('../middleware/authMiddleware');

const router = new Router();

router.post('/', contractController.create);
router.get('/', contractController.getAll);
router.get('/:id', contractController.getOne);
router.delete('/:id', contractController.deleteOne);
router.delete('/', contractController.deleteAll);
router.patch('/:id', contractController.updateOne);
router.patch('/', contractController.update);

module.exports = router