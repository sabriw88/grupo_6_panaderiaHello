const db = require("../database/models");
const { validationResult } = require("express-validator");


const productsController = {
    listaDeProductos: (req, res) => { 
        db.Products.findAll({
          include: [{
            association: "category",
          }]
        })
        .then(Products=> {
     
         res.render("products/product", {products: Products}) 
        })
      },

    detalleProducto: (req,res)=>{

      //Antiguo código con JSON

  /*     const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 
      let producto = products.find(producto => producto.id == req.params.id) */

      db.Products.findByPk(req.params.id, {include: [{
        association: "category"}]
    })
    .then(Products=> {
 
     res.render("products/productDetail", {product: Products}) 
      })
    },
//crear
    create: (req, res) => {
      db.Categories.findAll()
        .then(function(categorias){
          return res.render('products/productCreate', {categorias: categorias});
      })

    },

    store: (req, res) => {
      const resultValidation = validationResult(req);
      if (resultValidation.errors.length > 0) {
        return res.render('products/productCreate', {
          errors: resultValidation.mapped(),
          oldData: req.body,
          categorias: db.Categories.findAll()});
      } else {
        db.Products.create({
          name: req.body.name,
          price: req.body.price,
          categoryId: req.body.category,
          stock:req.body.stock,
          image: req.file ? req.file.filename : 'default-image.png',
          description: req.body.description
        }).then(()=>res.redirect('/products'))
      }

      //Antiguo código con JSON

      /* 
      console.log(req.file);
      const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 
      
      let productoNuevo = { 
      id: products [products.length -1].id + 1,
      name: req.body.name,
      price: parseInt (req.body.price) ,
      category: req.body.category,
      description: req.body.description,
      image: req.file ? req.file.filename : "default-image.png",
    }
      products.push(productoNuevo);

      let productsJSON = JSON.stringify (products, null, " ");
    
      fs.writeFileSync(productsFilePath,productsJSON);

      res.redirect ("/products") */
    },

  //Edición 
    edit: (req, res) => {
      let pedidoProducto = db.Products.findByPk(req.params.id);

      let pedidoCategorias = db.Categories.findAll();

      Promise.all([pedidoProducto, pedidoCategorias])
        .then(function([producto, categorias]){
          res.render('products/productEdit', {producto:producto, categorias:categorias})
        })

      //Antiguo código con JSON
      /* const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 
      let id = req.params.id;
      let productToEdit = products.find(product => product.id == id);

      res.render('products/productEdit', {productToEdit}) */
    },

    update: (req, res) => {
      const resultvalidation = validationResult(req); 
        if (resultvalidation.errors.length > 0) {
            /* res.redirect('/products/edit/'+req.params.id) */
            return res.render ('products/productEdit', {
              errors: resultvalidation.mapped(),
              producto: req.body,
              categorias: db.Categories.findAll()
            });
        } else {
          db.Products.update({
            name: req.body.name,
            price: req.body.price,
            categoryId: req.body.category,
            stock:req.body.stock,
            image: req.file ? req.file.filename : 'default-image.png',
            description: req.body.description
          },{
            where: {
              id: req.params.id
            }
          },
          res.redirect ("/products"))
        }
      

      //Antiguo código con JSON

      /* const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

      let id = req.params.id;

      let productWithoutEdit = products.find(product => product.id == id);
      
      let productoEditado = {
        id: id,
        name: req.body.name,
        price: parseInt (req.body.price),
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

      res.redirect('/products/detail/' +id); */
      
      }
      
,

  //Delete

      destroy : (req, res) => {
        db.Products.destroy({
          where: {
            id: req.params.id
          }
        }),
        res.redirect('/products')

        //Antiguo código con JSON
  /*     let id = req.params.id;

      const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

      let finalProducts = products.filter(product => {
      return product.id != id
      })

      let productsJSON = JSON.stringify(finalProducts, null," ")

      fs.writeFileSync(productsFilePath, productsJSON);

       res.redirect("/products"); */

      },

  //Buscador

  search: async (req, res) => {
    try {
      const searchTerm = req.query.q;

      const products = await db.Products.findAll({
        where: {
          [db.Sequelize.Op.or]: [
            {
              name: {
                [db.Sequelize.Op.like]: `%${searchTerm}%`,
              },
            },
            {
              "$category.name$": {
                [db.Sequelize.Op.like]: `%${searchTerm}%`,
              },
            },
          ],
        },
        include: [
          {
            model: db.Categories,
            as: "category",
          },
        ],
      });

      res.render("products/searchResults", { searchTerm: searchTerm, products: products });
    } catch (error) {
      console.error("Error al realizar la búsqueda:", error);
      res.status(500).render("error", { error: "Ocurrió un error al realizar la búsqueda." });
    }
  }
    };
module.exports = productsController;