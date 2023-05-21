module.exports = (sequelize, Datatype) => {
    let alias = "Users";

    let cols = {
        id:{
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: Datatype.STRING,
        },
        surname:{
            type: Datatype.STRING,
        },
        email:{
            type: Datatype.INTEGER,
        },
        bday:{
            type: Datatype.DATEONLY,
        },
        adress:{
            type: Datatype.STRING,
        },
        password:{
            type: Datatype.STRING,
        },
        avatar:{
            type: Datatype.STRING,
        },
        admin:{
            type: Datatype.TINYINT
        }
    }
    
    let config = {
        tableName: "users",
        timeStamps: false
    }

    const User = sequelize.define(alias, cols, config);
    return User;
}
