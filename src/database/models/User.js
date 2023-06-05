module.exports = (sequelize, dataTypes) => {
    let alias = "Users";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING,
        },
        surname:{
            type: dataTypes.STRING,
        },
        email:{
            type: dataTypes.INTEGER,
        },
        bday:{
            type: dataTypes.DATEONLY,
        },
        adress:{
            type: dataTypes.STRING,
        },
        password:{
            type: dataTypes.STRING,
        },
        avatar:{
            type: dataTypes.STRING,
        },
        admin:{
            type: dataTypes.TINYINT
        }
    }
    
    let config = {
        tableName: "users",
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);
    return User;
}
