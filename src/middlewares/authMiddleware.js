function authMiddleware(req, res, next) {
    if (req.session.loggedUser && (req.session.loggedUser.id == req.params.id)) {
        next();
    } else if (req.session.loggedUser) {
        res.redirect('/users/profile/'+req.session.loggedUser.id)
    } else {
        res.redirect('/users/login')
    }
}

module.exports = authMiddleware;