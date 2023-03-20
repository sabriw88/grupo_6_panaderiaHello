const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController.js");

router.get('/', productsController.listaDeProductos);
router.get('/detail', productsController.detalleProducto);
router.get('/productCreate', productsController.create);



module.exports = router;