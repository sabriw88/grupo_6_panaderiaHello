const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController.js");

router.get('/product', productsController.listaDeProductos);
router.get('/productDetail', productsController.detalleProducto);




module.exports = router;