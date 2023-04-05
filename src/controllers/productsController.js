const fs = require('fs');
const path = require('path');

 const productsFilePath = path.join(__dirname,'../data/dataBase.json'); 


const productsController = {
    listaDeProductos: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 
        res.render('products/product', {products});
      },

    detalleProducto: (req,res)=>{
      const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 
      let producto = products.find(producto => producto.id == req.params.id)
      res.render('products/productDetail', {producto: producto});
    },
//crear
    create: (req, res) => {
      res.render('products/productCreate');
    },

    store: (req, res) => {
      const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 
      
    console.log (req.body)

      let productoNuevo = { 
      id: products [products.length -1].id + 1,
      name: req.body.name,
      price: parseInt (req.body.price) ,
      category: req.body.category,
      description: req.body.description,
      image: "panBaguete.jfif"
    }
      products.push(productoNuevo);

      let productsJSON = JSON.stringify (products, null, " ");
    
      fs.writeFileSync(productsFilePath,productsJSON);

      res.redirect ("/products")
    },

  //Edición 
    edit: (req, res) => {
      const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 
      let id = req.params.id;
      let productToEdit = products.find(product => product.id == id);

      res.render('products/productEdit', {productToEdit})
    },

    update: (req, res) => {

      const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

      let id = req.params.id;

      let productWithoutEdit = products.find(product => product.id == id);
      
      let productoEditado = {
        id: id,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        image: productWithoutEdit.image
      };

      let indice = products.findIndex(product => {
        return product.id == id
      })
      products[indice] = productoEditado;

      let productsJSON = JSON.stringify(products, null, " ");

      fs.writeFileSync(productsFilePath, productsJSON);

      res.redirect('/products/productDetail/' +id);
      
      }
      
}

module.exports = productsController;