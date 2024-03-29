const path = require('path');
const { body } = require('express-validator');

// Validación para la creación y modificación de productos
const validations = [
  body('name')
    .notEmpty().withMessage('El nombre es obligatorio.').bail()
    .isLength({min:3}).withMessage('El nombre debe tener al menos 3 caracteres.'),
  body('description')
    .isLength({ min: 10 }).withMessage('La descripción debe tener al menos 10 caracteres.'),
    body('price')
    .notEmpty().withMessage('El precio es obligatorio.'),
  body('image')
    .custom((value, { req }) => {
      if (!req.file) {
        throw new Error('La imagen es obligatoria.');
      }
      const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
      const fileExtension = req.file.originalname.toLowerCase().substring(req.file.originalname.lastIndexOf('.'));
      if (!allowedExtensions.includes(fileExtension)) {
        throw new Error('El archivo de imagen no es válido. Solo se permiten archivos JPG, JPEG, PNG y GIF.');
      }
      return true;
    })
];
module.exports = validations

