const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize')

class Admin extends Model {}
Admin.init({
  id:{
    type: DataTypes.INTEGER,
    allowNull:false,
    primaryKey: true,
    autoIncrement:true
  },
  username : {
    type:DataTypes.STRING,
    allowNull:false
  },
  email: {
    type: DataTypes.STRING,
    allowNull:false,
    unique:true
  },
  password: {
    type: DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Admin',
    timestamps: false,
    tableName: 'Admins'
  });
  
  module.exports = Admin