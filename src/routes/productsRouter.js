const express = require("express");
const router = express.Router();
const multer = require ("multer");
const path = require ("path");

let storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,"public/img")
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname) )
    }
})

const upload = multer({storage: storage});

const productsController = require("../controllers/productsController.js");

router.get('/', productsController.listaDeProductos);
router.get('/productDetail/:id/', productsController.detalleProducto);
router.get('/productCreate', productsController.create);

//Editar
router.get('/productEdit/:id', productsController.edit);
router.patch('/productEdit/:id', productsController.update);

//crear
    router.get("/productCreate",productsController.create);
    router.post("/", upload.single("image") ,productsController.store);


module.exports = router;