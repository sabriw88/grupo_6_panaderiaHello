const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController.js");

router.get('/', productsController.listaDeProductos);
router.get('/productDetail/:id/', productsController.detalleProducto);
router.get('/productCreate', productsController.create);

//Editar
router.get('/productEdit/:id', productsController.edit);
router.patch('/productEdit/:id', productsController.update);



module.exports = router;