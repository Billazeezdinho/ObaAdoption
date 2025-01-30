'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class adoption extends Model {

  }
  adoption.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references:{
        model: 'Pet',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
  });
  return adoption;
};