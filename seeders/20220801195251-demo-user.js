"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("User", [
      {
        firstName: "John",
        lastName: "Smith",
        username: "JohnnyBoy123",
        password: "partyanimal",
        zipcode: 85022,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Mor",
        lastName: "Fiend",
        username: "Morfiend",
        password: "rollerDerbier",
        zipcode: 47403,
        bio: "I will run you outta my garden",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Lauren",
        lastName: "Flores",
        username: "Lou",
        password: "Lou",
        zipcode: 40514,
        bio: "I got 99 problems but my green thumb ain't one",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Tizoc",
        username: "BadWhoodle",
        lastName: "Flores-Kleinert",
        password: "whoodle",
        zipcode: 85022,
        bio: "I hate gardening",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Kat",
        username: "Kat123",
        lastName: "James",
        password: "Kat",
        zipcode: 47403,
        bio: "I hate gardening",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("User", null, {});
  },
};
