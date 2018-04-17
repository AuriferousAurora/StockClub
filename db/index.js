var Sequelize = require('sequelize');
const connection = new Sequelize('postgres://localhost:5432/stockClub');

const models = {
    users: sequelize.import('./users'),
    stocks: sequelize.import('./stocks'),
    wallet: sequelize.import('./wallet'),
    mappingtable: sequelize.import('./mappingtable')    
};

Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  });
  
  models.sequelize = sequelize;
  models.Sequelize = Sequelize;
  
  module.exports =  models;