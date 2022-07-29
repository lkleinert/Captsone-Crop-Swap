const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:postgres@localhost:5432/crop_swap_development"
);

sequelize
  .authenticate()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error("Unable to connect to the database:", err);
  });
