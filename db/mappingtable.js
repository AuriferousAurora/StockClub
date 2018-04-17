'use strict';

module.exports = (sequelize, DataTypes) => {
    
    // create mappingtable where pull date from each table
    var Mappingtable = sequelize.define('mappingtable',
    {
        user_id: {
            type: DataTypes.INTEGER,
            // references: {
            //     model: Users,
            //     key: "id"
            // }
        },
        stock_id:{
            type: DataTypes.INTEGER,
            // references: {
            //     model: Stocks,
            //     key: "id"
            // }
        },
        initial_value: {
            type: DataTypes.DECIMAL,
        },
        number_of_shares_owned: {
            type: DataTypes.INTEGER
        }
    },{
        timestamps:false,
        freezeTableName:true
    });

    // creating an association between user, stocks and wallet
    Mappingtable.associate = function(models) {
        Mappingtable.hasOne(models.usres, {as: 'usersid', foreignKey: 'id'});
    };
    Mappingtable.associate = function(models) {
        Mappingtable.hasOne(models.stocks, {as: 'stocksid', foreignKey:'id'})
    }
    
    return Mappingtable;
}