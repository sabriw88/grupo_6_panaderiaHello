// Logeo de usuarios usando JSON
const User = require('../models/User');

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;
    
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField('email', emailInCookie);

    if (userFromCookie) {
        req.session.loggedUser = userFromCookie;
    }

    if (req.session.loggedUser) {
        res.locals.isLogged = true;
        res.locals.loggedUser = req.session.loggedUser;
    }

    next();
}

// Logeo de usuarios usando DB
/* const db = require("../database/models");

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = db.Users.findOne({
        where: {
            email: emailInCookie
        }
    }).then((usuario) => {
        if (usuario) {
            return usuario
        }        
    })

    if (userFromCookie) {
        req.session.loggedUser = userFromCookie;
    }

    if (req.session.loggedUser) {
        res.locals.isLogged = true;
        res.locals.loggedUser = req.session.loggedUser;
    }

    next();
} */

module.exports = userLoggedMiddleware;