"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("adoptions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pet_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "pets",
            key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      applicant_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      applicant_email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Pending",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("adoptions");
  },
};
