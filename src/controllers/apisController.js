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
                    usuario.avatar = 'http://localhost:3000/api/users/'+usuario.id+'/avatar'
                });
                res.status(200).json({
                    total: usuarios.length,
                    data: usuarios,
                    url : "api/users",
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
                usuario.avatar = 'http://localhost:3000/api/users/'+usuario.id+'/avatar'
                res.send(usuario)
                /* res.status(200).json({
                    data: usuario,
                    status: 200
                }) */
            })
    },

    // API para mostrar la foto de 1 usuario
    showUserAvatar: (req, res) => {
        db.Users.findByPk(req.params.id).then(usuario => {
            let userPhoto = usuario.dataValues.avatar
            res.sendFile(path.join(__dirname,'../../public/img/avatars/'+userPhoto))}) 
    }

}

module.exports = apisController;