const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController.js");

router.get('/product', productsController.listaDeProductos);


module.exports = router;