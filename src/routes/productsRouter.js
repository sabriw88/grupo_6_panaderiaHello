const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController.js");

router.get('/', productsController.listaDeProductos);
router.get('/detail/:id/', productsController.detalleProducto);

//Editar
router.get('/edit/:id', productsController.edit);
router.patch('/edit/:id', productsController.update);

//crear
    router.get("/create",productsController.create);
    router.post("/", productsController.store);
//Borrar

router.delete('/delete/:id', productsController.destroy);


module.exports = router;