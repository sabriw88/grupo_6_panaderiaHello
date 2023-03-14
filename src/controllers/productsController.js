const fs = require('fs');
const path = require('path');

 const productsFilePath = path.join(__dirname,'../data/dataBase.json'); 


const productsController = {
    listaDeProductos: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 
        res.render('products/product', {products});
      },

    
}

module.exports = productsController;