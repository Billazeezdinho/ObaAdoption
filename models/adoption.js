const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize')
const Pet = require('./pet');

  class adoption extends Model {}

  adoption.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
        references: {
          model: Pet, 
          key: 'id'
        }
    },
    applicant_name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    applicant_email: {
      type: DataTypes.STRING,
      allowNull:false
    },
    location:{
      type: DataTypes.STRING,
      allowNull:false
    },
    status: {
      type: DataTypes.STRING,
      allowNull:false,
      defaultValue: 'Pending'
    },
  }, {
    sequelize,
    modelName: 'adoption',
    tableName: 'adoptions',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamps: true,
  });

  module.exports = adoption;