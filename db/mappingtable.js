'use strict';

module.exports = (sequelize, DataTypes) => {
    
    // create mappingtable where pull date from each table
    var Mappingtable = connection.define('mappingtable',
    {
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: Users,
                key: "id"
            }
        },
        stock_id:{
            type: Sequelize.INTEGER,
            references: {
                model: Stocks,
                key: "id"
            }
        },
        initial_value: {
            type: Sequelize.DECIMAL,
        },
        number_of_shares_owned: {
            type: Sequelize.INTEGER
        }
    },{
        timestamps:false,
        freezeTableName:true
    });

    // creating an association between user, stocks and wallet
    mappingtable.associate = function(models) {
        mappingtable.hasOne(models.usres, {as: 'users', foreignKey: 'id'});
    };
    mappingtable.associate = function(models) {
        mappingtable.hasOne(models.stocks, {as: 'stocks', foreignKey:'id'})
    }
    
    return mappingtable;
}