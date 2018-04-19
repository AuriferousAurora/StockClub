'use strict';
// create stocks table (30 stocks)
module.exports = (sequelize, DataTypes) => {
    var Transactiontable = sequelize.define('transactiontable', {
        stockSymbol: DataTypes.STRING,
        numberOfShares: DataTypes.DECIMAL,
        purchasePrice: DataTypes.DECIMAL,
        purchaseTime: {
            type:DataTypes.TIME,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    {
        timestamps:false,
        freezeTableName:true
    });
    Transactiontable.associate = function(models) {
        Transactiontable.hasMany(models.users, {as : 'userId', key : 'id'})
    }    
    return Transactiontable;
};