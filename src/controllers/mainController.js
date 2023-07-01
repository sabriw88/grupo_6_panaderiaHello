const db = require("../database/models");

const mainController = {
    home: (req, res) => {
        db.Products.findAll({
            include: [{
              association: "category",
            }]
          })
          .then(Products=> {
       
           res.render("home", {products: Products}) 
          })
        },
    contact: (req, res) => {
        res.render("contact");
      },
    nosotros: (req, res) => {
      res.render("nosotros");
    }
}

module.exports = mainController;