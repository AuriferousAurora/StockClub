'use strict';

module.exports = (sequelize, DataTypes) => {
    
    // Create wallet table
    var Wallet = connection.define('wallet',
    {
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: Users,
                key: 'id',
            }
        },
        current_available: {
            type: Sequelize.INTEGER,
        },
        initial_current: {
            type: Sequelize.INTEGER,
            defaultValue: 100000
        }
    },{
        timestamps:false,
        freezeTableName:true
    });

    // creating an association between wallet and users
    wallet.associate = function (models) {
        wallet.belongTo(models.users, {as : 'users', foreignKey : 'id'})
    }

    return wallet;
}