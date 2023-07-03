const path = require('path');
const { body } = require('express-validator');

const userEditValidations = [
    body('name')
        .isLength({min:2}).withMessage('Revise que su nombre esté completo'),
    body('surname')
        .isLength({min:2}).withMessage('Revise que su apellido esté completo'),

//validacion de contraseña
  body('password')
    .notEmpty().withMessage('Debe ingresar una contraseña').bail()
    .isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres').bail()
    .matches("[A-Z]").withMessage('La contraseña debe tener al menos 1 letra mayúscula').bail()
    .matches("[0-9]").withMessage('La contraseña debe tener al menos 1 número').bail()
    .matches("[a-z]").withMessage('La contraseña debe tener al menos 1 letra minúscula'),  

//validacion de imagen
    body('avatar').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        if (!file) {
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error ('Las extensiones de archivo permitidas son .jpg, .jpeg, .png y .gif');
            }
        }
        return true;
    })
]

module.exports = userEditValidations;