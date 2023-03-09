const mainController = {
    home: (req, res) => {
        res.render("home");
    },
    contact: (req, res) => {
        res.render("contact");
      },
}

module.exports = mainController;