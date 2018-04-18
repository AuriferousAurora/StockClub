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
        liquidAsset: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: 100000.00,
        },
        portfolioValue: DataTypes.DECIMAL,
        updateTime: DataTypes.TIME,
        joinDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },{
        timestamps:false,
        freezeTableName:true
    })
    
    // Users.associate = function(models) {
    //     Users.hasMany(models.stocks, {as : 'userId', key : 'id', through:'mappingtable'})
    // }    
        return Users
}