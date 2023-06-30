const express = require("express");
const router = express.Router();
const nosotrosController = require("../controllers/nosotrosController")



router.get('/', nosotrosController.nosotros);


module.exports = router;