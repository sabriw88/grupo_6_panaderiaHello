module.exports = (sequelize, Datatype) => {
    let alias = "Products";

    let cols = {
        id:{
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: Datatype.STRING,
        },
        price:{
            type: Datatype.DECIMAL,
        },
        categoryId:{
            type: Datatype.INTEGER,
        },
        stock:{
            type: Datatype.INTEGER,
        },
        image:{
            type: Datatype.STRING,
        },
        description:{
            type: Datatype.TEXT
        }
    }

    let config = {
        tableName: "products",
        timeStamps: false
    }

    const Product = sequelize.define(alias, cols, config);
    return Product;
}
