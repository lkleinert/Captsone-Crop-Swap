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
      name: { type: DataTypes.STRING, allowNull: false },
      quantity: { type: DataTypes.STRING, allowNull: false },
      username_id: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Crop",
      tableName: "Crop",
    }
  );
  return Crop;
};
