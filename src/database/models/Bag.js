module.exports = (sequelize, Datatype) => {
    let alias = "Bags";

    let cols = {
        id:{
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId:{
            type: Datatype.INTEGER,
        },
        date:{
            type: Datatype.DATE,
        },
        status:{
            type: Datatype.STRING,
        },
        total:{
            type: Datatype.INTEGER,
        }
        
    }

    let config = {
        tableName: "bags",
        timeStamps: false
    }

    const Bag = sequelize.define(alias, cols, config);
    return Bag;
}
