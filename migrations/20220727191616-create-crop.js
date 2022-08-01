"use strict";
// const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Crop", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      available: {
        type: Sequelize.STRING,
      },
      growing: { type: Sequelize.STRING },
      quantity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      usernameId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "User",
          key: "username",
        },
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
    await queryInterface.dropTable("Crop");
  },
};
