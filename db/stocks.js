'use strict';
// create stocks table (30 stocks)
module.exports = (sequelize, DataTypes) => {
    var Stocks = sequelize.define('stocks',
    {
        companyName: DataTypes.STRING,
        stockSymbol: {
            type: DataTypes.STRING,
            unique:true
        },
        currentValuePerShare: {
            type: DataTypes.DECIMAL,
        }
    },{
        timestamps:false,
        freezeTableName:true
    });
Stocks.associate = function(models) {
    Stocks.belongsToMany(models.users, {as : 'stockId', key : 'id', through:'mappingtable'})
}    
    return Stocks;
};

