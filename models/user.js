"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Crop, { foreignKey: "usernameId" });
      this.hasMany(models.Message, { foreignKey: "toUsername" });
      this.hasMany(models.Message, { foreignKey: "fromUsername" });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      zipcode: { type: DataTypes.INTEGER, allowNull: false },
      bio: { type: DataTypes.STRING },
      //image reference
    },
    {
      sequelize,
      modelName: "User",
      tableName: "User",
    }
  );
  return User;
};
