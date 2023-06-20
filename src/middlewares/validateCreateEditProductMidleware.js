const { body} = require('express-validator');

// Validación para la creación y modificación de productos
const productsValidations = [
  body('name')
    .notEmpty().withMessage('El nombre es obligatorio.')
    .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres.'),
  body('description')
    .isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres.'),
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
module.exports = productsValidations

