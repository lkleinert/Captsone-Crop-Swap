"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Message", [
      {
        fromUsername: "JohnnyBoy123",
        toUsername: "BadWhoodle",
        content: "I want to buy your peaches, Whoods!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fromUsername: "Morfiend",
        toUsername: "BadWhoodle",
        content: "Gimme your peaches!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Message", null, {});
  },
};
