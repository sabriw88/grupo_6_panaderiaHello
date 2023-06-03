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

//validacion de contraseña
    body('password')
    .notEmpty().withMessage('Debe ingresar una contraseña').bail()
    .isLength({min:8}).withMessage('Debera tener al menos 8 caracteres').bail()
    .matches("[A-Z]").withMessage('Debera tener al menos 1 letra mayuscula').bail()
    .matches("[0-9]").withMessage('Debera tener al menos 1 numero').bail()
    .matches("[a-z]").withMessage('Debera tener al menos 1 letra minuscula'), 
    

   /*  body("confirmPsw")
    .notEmpty()
    .withMessage("Este campo no puede estar vacío.")
    .custom((value, { req }) => {
      if (value === req.body.password) {
        return true;
      }
      return false;
    })
    .withMessage("Las contraseñas no coinciden."), */


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