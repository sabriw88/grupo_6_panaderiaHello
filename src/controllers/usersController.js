const db = require("../database/models");
const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator");

/* const User = require('../models/User'); */

const usersController = {
    // Ir al registro de usuario
    register: (req, res) => {
        res.render("users/register");
    },

    // Guardar a un nuevo usuario en JSON
/*     processRegister: (req, res) => {
        const resultvalidation = validationResult(req); 
        if (resultvalidation.errors.length > 0) {
            return res.render ('users/register', {
                errors: resultvalidation.mapped(),
                oldData: req.body
            });
        }
        let userInDB = User.findByField('email', req.body.email);
        if (userInDB) {
            return res.render ('users/register', {
                errors: {
                    email: {
                        msg: 'Este correo electrónico ya está registrado'
                    }
                },
                oldData: req.body
            });
        }
        let userToCreate = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }
        let usercreated = User.create(userToCreate);
        return res.redirect('/users/login');
    }, */

    // Guardar a un nuevo usuario en Base de datos
    processRegister: (req, res) => {
        const resultvalidation = validationResult(req); 
        if (resultvalidation.errors.length > 0) {
            return res.render ('users/register', {
                errors: resultvalidation.mapped(),
                oldData: req.body
            });
        }
        db.Users.create({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            bday:req.body.bday,
            adress: req.body.address,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.file ? req.file.filename : 'default-image.png',
            admin: 0
        })
        return res.redirect('/users/login');
    },
    
    // Editar usuario //

    edit: (req, res) => {
        db.Users.findByPk(req.params.id)
          .then((usuario) => {
            res.render('users/userEdit', { usuario: usuario });
          })
          .catch((error) => {
            console.log(error);
            res.redirect('/');
          });
    },

    update: (req,res) => {
        db.Users.update({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            bday:req.body.bday,
            adress: req.body.address,
            avatar: req.file ? req.file.filename : 'default-image.png',
            password: req.body.password,
          },{
            where: {
              id: req.params.id
            }
          },
            res.redirect ("../views/userEdit" + req.params.id))
    },

    // Ir a la página de login
    login: (req, res) => {
        res.render("users/login");
      },
    // Logearse
    processLogin: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);
        if (userToLogin) {
            let passwordVerified = bcrypt.compareSync(req.body.password, userToLogin.password);
            if (passwordVerified) {
                delete userToLogin.password;
                req.session.loggedUser = userToLogin;
                if (req.body.rememberMe) {
                    res.cookie('userEmail', req.body.email, { maxAge: 1000 * 60 * 60 * 24})
                }
                res.redirect('/users/profile')
            }
            return res.render('users/login', {
                errors: {
                    password: {
                        msg: 'Las credenciales son inválidas, por favor revise el correo y contraseña ingresados'
                    }
                }
            })
        }
        return res.render('users/login', {
            errors: {
                email: {
                    msg: 'El correo ingresado no se encuentra en nuestra base de datos'
                }
            }
        })
    },
    // Ir al perfil de usuario
    profile: (req, res) => {
        res.render('users/profile', {
            user: req.session.loggedUser
        });
    },
    // Deslogearse
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        res.redirect('/');
    },
    // Ir al carrito de productos
    productCart: (req, res) => {
        res.render('users/productCart');
    }
}

module.exports = usersController;