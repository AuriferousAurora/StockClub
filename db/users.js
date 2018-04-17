'use strict';

// Create users table

module.exports = (sequelize, DataTypes) => {

    var Users = sequelize.define('users',
    {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
        },
        password: DataTypes.STRING,
        emailAdress: DataTypes.STRING,
        joinData: DataTypes.DATEONLY
    },{
        timestamps:false,
        freezeTableName:true
    })
    
    return Users

}