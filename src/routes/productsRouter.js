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
//Lectura
    router.get('/', productsController.listaDeProductos);
    router.get('/detail/:id/', productsController.detalleProducto);
    router.get("/search", productsController.search);

//Editar
    router.get('/edit/:id', productsController.edit);
    router.patch('/edit/:id', upload.single("image") , productsController.update);

//crear
    router.get("/productCreate",productsController.create);
    router.post("/", upload.single("image") ,productsController.store);
    router.post("/", productsController.store);
       
//Borrar
    router.delete('/delete/:id', productsController.destroy);


module.exports = router;