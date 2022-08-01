"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Crop extends Model {}
  Crop.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      available: { type: DataTypes.STRING },
      growing: { type: DataTypes.STRING },
      quantity: { type: DataTypes.STRING, allowNull: false },
      usernameId: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Crop",
      tableName: "Crop",
    }
  );
  return Crop;
};
