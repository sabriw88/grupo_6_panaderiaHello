const express = require("express");
const router = express.Router();

const apisController = require("../controllers/apisController");

router.get('/users', apisController.listUsers);
router.get('/users/:id/avatar', apisController.showUserAvatar);
router.get('/users/:id', apisController.showUser);


module.exports = router;