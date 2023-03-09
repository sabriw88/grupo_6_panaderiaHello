const usersController = {
    register: (req, res) => {
        res.render("users/register");
    },
    login: (req, res) => {
        res.render("users/login");
      },
    productCart: (req, res) => {
        res.render('users/productCart');
    }
}

module.exports = usersController;