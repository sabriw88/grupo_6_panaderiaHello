const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController.js");

const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const loginValidations = require('../middlewares/validateLoginMiddleware.js')

router.get('/register', guestMiddleware, usersController.register);
router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister) // agregado

router.get('/edit/:id', usersController.edit);
router.post('/edit/:id', uploadFile.single('avatar'), usersController.update);

router.get('/login', guestMiddleware, usersController.login);
router.post('/login', loginValidations, usersController.processLogin);// agregado

router.get('/profile/:id', authMiddleware, usersController.profile);// agregado
router.get('/logout', usersController.logout);// agregado

router.get('/productCart', usersController.productCart);

module.exports = router;