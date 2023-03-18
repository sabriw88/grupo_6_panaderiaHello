const fs = require('fs');
const path = require('path');

 const productsFilePath = path.join(__dirname,'../data/dataBase.json'); 


const productsController = {
    listaDeProductos: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 
        res.render('products/product', {products});
      },

    detalleProducto: (req,res)=>{
      res.render('products/productDetail')
    },

    create: (req, res) => {
      res.render('products/productCreate')
    },
}

module.exports = productsController;