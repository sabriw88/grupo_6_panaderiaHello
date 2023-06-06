const path = require('path');
const { body } = require('express-validator');
const db = require("../database/models");

const loginValidations = [
    body('email')
        .notEmpty().withMessage('Debe ingresar su correo electrónico').bail()
        .isEmail().withMessage('Debe ingresar un correo electrónico válido').bail()
        .custom((value, {req}) => {
            let userToBeLogged = db.Users.findOne({
                where: {email: req.body.email}
            }).then((usuario => {
                return usuario
            }))
            if (!userToBeLogged) {
                throw new Error ('Por favor verifique su correo electrónico')
            }
        }),

    body('password')
    .notEmpty().withMessage('Debe ingresar una contraseña').bail()

]

module.exports = loginValidations;