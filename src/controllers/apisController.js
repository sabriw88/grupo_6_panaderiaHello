const { raw } = require("mysql2");
const db = require("../database/models");
const path = require('path');

const apisController = {

    // API para buscar todos los usuarios
    listUsers: (req, res) => {
        db.Users
            .findAll()
            .then(usuarios => {
                usuarios.forEach(usuario => {
                    delete usuario.dataValues.password;
                    delete usuario.dataValues.admin;
                    delete usuario.dataValues.bday;
                    delete usuario.dataValues.adress;
                    delete usuario.dataValues.avatar;
                    usuario.dataValues.detail = 'http://localhost:3031/api/users/'+usuario.id;
                });
                res.status(200).json({
                    total: usuarios.length,
                    data: usuarios,
                    status: 200
                })
            }) 
    },

    // API para mostrar 1 usuario
    showUser: (req, res) => {
        db.Users
            .findByPk(req.params.id)
            .then(usuario => {
                delete usuario.dataValues.password;
                delete usuario.dataValues.admin;
                usuario.avatar = 'http://localhost:3031/api/users/'+usuario.id+'/avatar'
                res.status(200).json({
                    data: usuario,
                    status: 200
                })
            })
    },

    // API para mostrar la foto de 1 usuario
    showUserAvatar: (req, res) => {
        db.Users.findByPk(req.params.id).then(usuario => {
            let userPhoto = usuario.dataValues.avatar
            res.sendFile(path.join(__dirname,'../../public/img/avatars/'+userPhoto))}) 
    },

    // API para mostrar listado de productos
    listProducts: (req, res) => {
        db.Products
            .findAll({raw:true})
            .then(productos => {
                
                productos.forEach(producto => {
        
                    producto.detail = 'http://localhost:3031/api/products/'+producto.id;

                });

                

                let contadorPan = 0
                let contadorDelicias = 0
                let contadorTortas = 0

                productos.map((product, index)=>{
                 
                    if(product.categoryId==1){ 
                        contadorPan = contadorPan + 1;
                    }else if(product.categoryId==2){
                        contadorTortas = contadorTortas + 1;
                    }else if(product.categoryId==3){
                        contadorDelicias = contadorDelicias + 1;
                    }
                    
                })

                let findAllProducts = {
                    count: productos.length,
                    ultimo: productos[productos.length-1],
                  /*   foto: 'http://localhost:3031/api/products/12/image', */
                    data: productos,  
                    contadores: [{titulo:"Total de panes", total:contadorPan},{titulo:"Total de tortas", total:contadorTortas},{titulo:"Total de delicias", total:contadorDelicias}],
                    status: 200
                   
                }

                console.log(contadorPan, contadorDelicias, contadorTortas)
                
                
                  
                findAllProducts.ultimo.foto='http://localhost:3031/api/products/'+findAllProducts.ultimo.id+'/image';
      
                res.status(200).json(findAllProducts)
            }) 
} ,




listCategories: (req, res) => {
    db.Categories
        .findAll()
        .then(categorias => {
            categorias.forEach(categoria => {
                categoria.dataValues.detail = 'http://localhost:3031/api/categoria/'+categoria.id
            });
            res.status(200).json({
                countByCategory: categorias.length,
                status: 200
            })
        }) 
} ,

    // API para mostrar 1 producto
    showProduct: (req, res) => {
        db.Products
            .findByPk(req.params.id)
            .then(producto => {
                producto.image = 'http://localhost:3031/api/products/'+producto.id+'/image'
                res.status(200).json({

                    data: producto,
                    status: 200
                })
            })
    },

    // API para mostrar la foto del producto
    showProductPhoto: (req, res) => {
        db.Products.findByPk(req.params.id).then(producto => {
            let productPhoto = producto.dataValues.image
            res.sendFile(path.join(__dirname,'../../public/img/'+productPhoto))}) 
    },
}

module.exports = apisController;