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
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Crop", null, {});
  },
};
