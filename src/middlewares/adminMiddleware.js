function adminMiddleware(req, res, next) {
    if (req.session.loggedUser && (req.session.loggedUser.admin == 1)) {
        next();
    } else if (req.session.loggedUser) {
        res.redirect('/products')
    } else {
        res.redirect('/users/login')
    }
}

module.exports = adminMiddleware;