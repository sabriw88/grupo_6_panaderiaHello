const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController.js");

const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const loginValidations = require('../middlewares/validateLoginMiddleware.js')

router.get('/register', guestMiddleware, usersController.register);
router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister) 

router.get('/edit/:id', authMiddleware, usersController.edit);
router.put('/edit/:id', uploadFile.single('avatar'), usersController.update);

router.get('/login', guestMiddleware, usersController.login);
router.post('/login', loginValidations, usersController.processLogin);

router.get('/profile/:id', authMiddleware, usersController.profile);
router.get('/logout', usersController.logout);

router.get('/productCart', usersController.productCart);

router.delete('/delete/:id', authMiddleware, usersController.delete);

module.exports = router;