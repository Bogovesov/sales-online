const { body } = require('express-validator');

const clientCreateValidation = [
    body('name', 'Wrong client name').isString().isLength({ min: 3 }),
    body('phone', 'Wrong phone number').optional().isMobilePhone(),
    body('mail', 'Wrong email address').optional().isEmail(),
]

module.exports = {
    clientCreateValidation
};