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

// module.exports = {
//   development: {
//     databases: {
//       crop_swap_development: {
//         database: process.env.POSTGRES_DB,
//         username: process.env.POSTGRES_USER,
//         password: null,
//         host: process.env.POSTGRES_HOST,
//         port: process.env.POSTGRES_PORT,
//         dialect: "postgres",
//       },
//     },
//     dialect: "postgres",
//   },
//   production: {
//     databases: {
//       crop_swap_development: {
//         database: process.env.POSTGRES_DB,
//         username: process.env.POSTGRES_USER,
//         password: null,
//         host: process.env.POSTGRES_HOST,
//         port: process.env.POSTGRES_PORT,
//         dialect: "postgres",
//       },
//     },
//   },
// };
