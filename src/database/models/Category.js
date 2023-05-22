module.exports = (sequelize, Datatype) => {
    let alias = "Categories";

    let cols = {
        id:{
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: Datatype.STRING,
        }
    }

    let config = {
        tableName: "categories",
        timeStamps: false
    }

    const Category = sequelize.define(alias, cols, config);
    return Category;
}
