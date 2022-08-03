require("dotenv/config");

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: null,
    database: process.env.POSTGRES_DB_DEV,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
  },
  test: {
    username: process.env.POSTGRES_USER,
    password: null,
    database: process.env.POSTGRES_DB_TEST,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: null,
    database: process.env.POSTGRES_DB_PRODUCTION,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
  },
};
