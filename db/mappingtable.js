'use strict';

module.exports = (sequelize, DataTypes) => {
    
    // create mappingtable where pull date from each table
    var Mappingtable = sequelize.define('mappingtable',
    {
        userId: {
            type: DataTypes.INTEGER,
            // references: {
            //     model: Users,
            //     key: "id"
            // }
        },
        stockId:{
            type: DataTypes.INTEGER,
            // references: {
            //     model: Stocks,
            //     key: "id"
            // }
        },
        initialPurchaseValue: {
            type: DataTypes.DECIMAL,
        },
        numberOfSharesOwned: {
            type: DataTypes.INTEGER
        }
    },{
        timestamps:false,
        freezeTableName:true
    });

    // creating an association between user, stocks and wallet
    Mappingtable.associate = function(models) {
        console.log(models)
        Mappingtable.hasMany(models.users, {as: 'usersId', foreignKey: 'id'});
    };
    Mappingtable.associate = function(models) {
        Mappingtable.hasMany(models.stocks, {as: 'stocksId', foreignKey:'id'})
    }
    
    return Mappingtable;
}