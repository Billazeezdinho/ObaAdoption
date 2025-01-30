const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('sql10759416', 'sql10759416', 'mjcnfa1VMt', {
    host: 'sql10.freesqldatabase.com',
    dialect: 'mysql'
  });

  module.exports = sequelize;