'use strict';

// Create users table

module.exports = (sequelize, DataTypes) => {

var Users = connection.define('users',
{
    user_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
    },
    password: Sequelize.INTEGER,
    emailAdress: Sequelize.STRING,
    joinData: Sequelize.DATEONLY
},{
    timestamps:false,
    freezeTableName:true
})

}