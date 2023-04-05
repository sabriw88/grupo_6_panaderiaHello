const path = require('path');
const { body } = require('express-validator');

const validations = [
    body('name').notEmpty().withMessage('Debe ingresar su nombre'),
    body('surname').notEmpty().withMessage('Debe ingresar su apellido'),
    body('email')
        .notEmpty().withMessage('Debe ingresar su correo electrónico').bail()
        .isEmail().withMessage('Debe ingresar un correo electrónico válido'),
    body('bday').notEmpty().withMessage('Debe ingresar su fecha de nacimiento'),
    body('address').notEmpty().withMessage('Debe ingresar su dirección'),
    body('password').notEmpty().withMessage('Debe ingresar una contraseña'),
    body('avatar').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        if (!file) {
            throw new Error ('Debe subir una imagen')
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error ('Las extensiones de archivo permitidas son .jpg, .png y .gif');
            }
        }
        return true;
    })
]

module.exports = validations;