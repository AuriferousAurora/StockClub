'use strict';
// create stocks table (30 stocks)
module.exports = (sequelize, DataTypes) => {
    var Stocks = connection.define('stocks',
    {
        company_name: Sequelize.STRING,
        stock_symbol: {
            type: Sequelize.STRING,
            unique:true
        },
        current_value_per_share: {
            type: Sequelize.DECIMAL,
        }
    },{
        timestamps:false,
        freezeTableName:true
    });
    
};