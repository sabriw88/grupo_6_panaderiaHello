module.exports = (sequelize, dataTypes) => {
    let alias = "Categories";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING,
        }
    }

    let config = {
        tableName: "categories",
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models){
        Category.hasMany(models.Products,{
            as: "products",
            foreignKey: "categoryId"
        })
     }

    return Category;
}
