const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController.js");

router.get('/detail', productsController.productDetail);

module.exports = router;