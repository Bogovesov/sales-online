const Router = require('express');
const compayController = require('../controller/compayController');
const { clientCreateValidation } = require('../middleware/validations');
const authMiddleware = require('../middleware/authMiddleware');

const router = new Router();

router.post('/', compayController.create);
router.get('/', compayController.getAll);
router.get('/:id', compayController.getOne);
router.delete('/:id', compayController.deleteOne);
router.delete('/', compayController.deleteAll);

module.exports = router