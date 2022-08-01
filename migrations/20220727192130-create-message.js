"use strict";

// const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Message", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fromUsername: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "User",
          key: "username",
        },
      },
      toUsername: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "User",
          key: "username",
        },
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dateTime: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
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
    await queryInterface.dropTable("Message");
  },
};
