module.exports = (sequelize, dataTypes) => {
    let alias = "Bag_products";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        bagId:{
            type: dataTypes.INTEGER,
        },
        productId:{
            type: dataTypes.INTEGER,
        },
        quantity:{
            type: dataTypes.INTEGER,
        },
        unitPrice:{
            type: dataTypes.DECIMAL,
        },
        total:{
            type: dataTypes.DECIMAL,
        }
    }
    
    let config = {
        tableName: "bag_products",
        timeStamps: false
    }

    const Bag_product = sequelize.define(alias, cols, config);
    return Bag_product;
}
