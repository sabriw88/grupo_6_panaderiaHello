module.exports = (sequelize, dataTypes) => {
    let alias = "Bags";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId:{
            type: dataTypes.INTEGER,
        },
        date:{
            type: dataTypes.DATE,
        },
        status:{
            type: dataTypes.STRING,
        },
        total:{
            type: dataTypes.INTEGER,
        }
        
    }

    let config = {
        tableName: "bags",
        timeStamps: false
    }

    const Bag = sequelize.define(alias, cols, config);
    return Bag;
}
