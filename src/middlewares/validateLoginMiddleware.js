const path = require('path');
const { body } = require('express-validator');

const loginValidations = [
    body('password')
    .notEmpty().withMessage('Debe ingresar una contraseña').bail()
]

module.exports = loginValidations;