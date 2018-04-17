// 'use strict';

// module.exports = (sequelize, DataTypes) => {
    
//     // Create wallet table
//     var Wallet = sequelize.define('wallet',
//     {
//         user_id: {
//             type: DataTypes.INTEGER,
//             // references: {
//             //     model: Users,
//             //     key: 'id',
//             // }
//         },
//         current_available: {
//             type: DataTypes.INTEGER,
//         },
//         initial_current: {
//             type: DataTypes.INTEGER,
//             defaultValue: 100000
//         }
//     },{
//         timestamps:false,
//         freezeTableName:true
//     });

//     // creating an association between wallet and users
//     Wallet.associate = function (models) {
//         Wallet.belongsTo(models.users, {as : 'usersid', foreignKey : 'id'})
//     }

//     return Wallet;
// }