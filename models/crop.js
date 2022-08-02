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
      this.belongsTo(models.User, { foreignKey: "usernameId" });
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
