Crop = require("./crop");
Message = require("./message");
User = require("./user");

//define relationship between user and crops
const setAssociations = function () {
  User.hasMany(Crop, { foreignKey: "username_id" });
  Crop.belongsTo(User);

  //define relationship between user and messages
  User.hasMany(Message, { as: "receiver", foreignKey: "to_username" });
  User.hasMany(Message, { as: "sender", foreignKey: "from_username" });
  Message.belongsTo(User);
};

module.exports = setAssociations;
