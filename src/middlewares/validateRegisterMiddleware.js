const path = require('path');
const { body } = require('express-validator');

const validations = [
    body('name')
        .notEmpty().withMessage('Debe ingresar su nombre').bail()
        .isLength({min:2}).withMessage('Revise que su nombre esté completo'),
    body('surname')
        .notEmpty().withMessage('Debe ingresar su apellido').bail()
        .isLength({min:2}).withMessage('Revise que su apellido esté completo'),
    body('email')
        .notEmpty().withMessage('Debe ingresar su correo electrónico').bail()
        .isEmail().withMessage('Debe ingresar un correo electrónico válido')
        /* validar q no se repita con un mail de la base quedó en el controller */,
    body('bday').notEmpty().withMessage('Debe ingresar su fecha de nacimiento'),
    body('address').notEmpty().withMessage('Debe ingresar su dirección'),

//validacion de contraseña
  body('password')
    .notEmpty().withMessage('Debe ingresar una contraseña').bail()
    .isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres').bail()
    .matches("[A-Z]").withMessage('La contraseña debe tener al menos 1 letra mayúscula').bail()
    .matches("[0-9]").withMessage('La contraseña debe tener al menos 1 número').bail()
    .matches("[a-z]").withMessage('La contraseña debe tener al menos 1 letra minúscula'),  

    body('avatar').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        if (!file) {
            throw new Error ('Debe subir una imagen')
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error ('Las extensiones de archivo permitidas son .jpg, .jpeg, .png y .gif');
            }
        }
        return true;
    })
]

module.exports = validations;