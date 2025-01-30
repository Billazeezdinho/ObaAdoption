'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pet.init({
    breed:{
    type:DataTypes.STRING,
    allowNull:false
    },
    color:{type: DataTypes.STRING,
      allowNull:false

    },
    sex:{ type:DataTypes.STRING,
      allowNull:false

    },
    age:{type: DataTypes.INTEGER,
      allowNull:false

    }
  }, {
    sequelize,
    modelName: 'pet',
  });
  return pet;
};