'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pets', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull:false,
        
      },
      breed: {
        type: Sequelize.STRING,
        allowNull:false
      },
      color: {
        type: Sequelize.STRING,
        allowNull:false
      },
      sex: {
        type: Sequelize.STRING,
        allowNull:false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pets');
  }
};