'use strict';
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
        Transactiontable.belongsTo(models.users)
    }    
    return Transactiontable;
};