module.exports = (sequelize, Datatype) => {
    let alias = "Bag_products";

    let cols = {
        id:{
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        bagId:{
            type: Datatype.INTEGER,
        },
        productId:{
            type: Datatype.INTEGER,
        },
        quantity:{
            type: Datatype.INTEGER,
        },
        unitPrice:{
            type: Datatype.DECIMAL,
        },
        total:{
            type: Datatype.DECIMAL,
        }
    }
    
    let config = {
        tableName: "bag_products",
        timeStamps: false
    }

    const Bag_product = sequelize.define(alias, cols, config);
    return Bag_product;
}
