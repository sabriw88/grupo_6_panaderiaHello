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

const productsController = require("../controllers/productsController.js");

const upload = multer({storage: storage});
const validations = require('../middlewares/validateCreateEditProductMidleware.js');
const adminCheck = require('../middlewares/adminMiddleware.js')

//Lectura
    router.get('/', productsController.listaDeProductos);
    router.get('/detail/:id/', productsController.detalleProducto);
    router.get("/search", productsController.search);

//Editar
    router.get('/edit/:id', adminCheck, productsController.edit);
    router.patch('/edit/:id', upload.single("image"), validations, productsController.update);

//crear
    router.get("/create", adminCheck, productsController.create);
    router.post("/create", upload.single("image"), validations, productsController.store);
       
//Borrar
    router.delete('/delete/:id', adminCheck, productsController.destroy);


module.exports = router;