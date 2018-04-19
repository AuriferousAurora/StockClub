'use strict';

// Create users table

module.exports = (sequelize, DataTypes) => {

    var Users = sequelize.define('users',
    {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
        },
        password: DataTypes.STRING,
        emailAddress: DataTypes.STRING,
        currencyAvaliable: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: 100000.00,
        },
        portfolioValue: DataTypes.DECIMAL,
        updateTime: DataTypes.Now,
        joinDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },{
        timestamps:false,
        freezeTableName:true
    })
    
    Users.associate = function(models) {
        Users.belongsToMany(models.transactiontable, {as : 'userId', key : 'id'})
    }    
        return Users
}