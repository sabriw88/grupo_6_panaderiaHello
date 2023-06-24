const express = require("express");
const router = express.Router();

const apisController = require("../controllers/apisController");

router.get('/users', apisController.listUsers);
router.get('/users/:id/avatar', apisController.showUserAvatar);
router.get('/users/:id', apisController.showUser);
router.get('/products', apisController.listProducts);
router.get('/products/:id', apisController.showProduct);
router.get('/products/:id/image', apisController.showProductPhoto);
router.get('/categoria', apisController.listCategories);

module.exports = router;