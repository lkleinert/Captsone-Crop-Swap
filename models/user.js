"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Crop, {
        foreignKey: "username",
        as: "crops",
      });
    }
    //*Not quite sure how to do this part*
    // User.hasMany(models.Message, {
    //   foreignKey: "from_user",
    //   as: "messages",
    // });
    // User.hasMany(models.Message, {
    //   foreignKey: "to_user",
    //   as: "messages",
    // });
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      zipcode: { type: DataTypes.INTEGER, allowNull: false },
      bio: { type: DataTypes.STRING },
      //image reference
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
