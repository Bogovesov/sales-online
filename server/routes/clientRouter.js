const Router = require('express');
const clientController = require('../controller/clientController');
const { clientCreateValidation } = require('../middleware/validations');
const authMiddleware = require('../middleware/authMiddleware');

const router = new Router();

router.post('/', clientCreateValidation, clientController.create);
router.get('/', clientController.getAll);
router.get('/:id', clientController.getOne);
router.delete('/:id', clientController.deleteOne)
router.delete('/', clientController.deleteAll)

module.exports = router