const path = require('path');
const { body } = require('express-validator');

const loginValidations = [
    body('email')
        .notEmpty().withMessage('Debe ingresar su correo electrónico').bail()
        .isEmail().withMessage('Debe ingresar un correo electrónico válido')
        /* verificación de que el mail esté en la DB (incluido en el controller) */,
    body('password')
        .notEmpty().withMessage('Debe ingresar una contraseña').bail()
]

module.exports = loginValidations;