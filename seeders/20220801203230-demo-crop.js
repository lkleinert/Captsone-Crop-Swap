"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Crop", [
      {
        available: "peaches",
        quantity: "dozen",
        usernameId: "BadWhoodle",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        available: "peaches",
        quantity: "2",
        usernameId: "Kat123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        available: "apples",
        quantity: "dozen",
        usernameId: "BadWhoodle",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        available: "cucumbers",
        quantity: "dozen",
        usernameId: "Morfiend",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Crop", null, {});
  },
};
