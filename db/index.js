var Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/stockClub');

const models = {
    users: sequelize.import('./users'),
    stocks: sequelize.import('./stocks'),
    wallet: sequelize.import('./wallet'),
    mappingtable: sequelize.import('./mappingtable')    
};
console.log(Object.keys(models));
Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  });
  
  models.sequelize = sequelize;
  models.Sequelize = Sequelize;
  
  module.exports =  models;