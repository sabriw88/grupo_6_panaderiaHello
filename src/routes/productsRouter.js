const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController.js");

router.get('/product', productsController.listaDeProductos);
router.get('/productDetail', productsController.detalleProducto);
router.get('/productCreate', productsController.create);



module.exports = router;