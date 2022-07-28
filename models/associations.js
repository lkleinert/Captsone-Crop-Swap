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

/**
 * Helper method for defining associations.
 * This method is not a part of Sequelize lifecycle.
 * The `models/index` file will call this method automatically.
 */
// static associate(models) {
//   Crop.belongsTo(models.User, {
//     foreignKey: "username",
//     as: "user",
//   });
// }
// static associate(models) {
//*not quite sure how to do this part*
// Message.belongsTo(models.User, {
//   foreignKey: "from_user",
//   as: "user",
// });
// Message.belongsTo(models.User, {
//   foreignKey: "to_user",
//   as: "user",
// });
// }

//  static associate(models) {
//   User.hasMany(models.Crop, {
//     foreignKey: "username",
//     as: "crops",
//   });
// }
//*Not quite sure how to do this part*
// User.hasMany(models.Message, {
//   foreignKey: "from_user",
//   as: "messages",
// });
// User.hasMany(models.Message, {
//   foreignKey: "to_user",
//   as: "messages",
// });
