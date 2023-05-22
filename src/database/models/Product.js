module.exports = (sequelize, dataTypes) => {
    let alias = "Products";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING,
        },
        price:{
            type: dataTypes.DECIMAL,
        },
        categoryId:{
            type: dataTypes.INTEGER,
        },
        stock:{
            type: dataTypes.INTEGER,
        },
        image:{
            type: dataTypes.STRING,
        },
        description:{
            type: dataTypes.TEXT
        }
    }

    let config = {
        tableName: "products",
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);
    return Product;
}
