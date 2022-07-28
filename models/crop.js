"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Crop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Crop.belongsTo(models.User, {
        foreignKey: "username",
        as: "user",
      });
    }
  }
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
      username: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Crop",
    }
  );
  return Crop;
};
