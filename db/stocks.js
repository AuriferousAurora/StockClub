'use strict';
// create stocks table (30 stocks)
module.exports = (sequelize, DataTypes) => {
    var Stocks = sequelize.define('stocks',
    {
        company_name: DataTypes.STRING,
        stock_symbol: {
            type: DataTypes.STRING,
            unique:true
        },
        current_value_per_share: {
            type: DataTypes.DECIMAL,
        }
    },{
        timestamps:false,
        freezeTableName:true
    });
    
    return Stocks;
};