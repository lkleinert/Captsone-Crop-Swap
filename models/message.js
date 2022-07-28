"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //*not quite sure how to do this part*
      // Message.belongsTo(models.User, {
      //   foreignKey: "from_user",
      //   as: "user",
      // });
      // Message.belongsTo(models.User, {
      //   foreignKey: "to_user",
      //   as: "user",
      // });
    }
  }
  Message.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      from_username: { type: DataTypes.STRING, allowNull: false },
      to_username: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.STRING },
      date_time: { type: DataTypes.NOW, allowNull: false },
    },
    {
      sequelize,
      modelName: "Message",
    }
  );
  return Message;
};
