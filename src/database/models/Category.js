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
        timeStamps: false
    }

    const Category = sequelize.define(alias, cols, config);
    return Category;
}
