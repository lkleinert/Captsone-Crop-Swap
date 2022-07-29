"use strict";

const express = require("express");
//make instance of app
const app = express();
//initiate cors
const cors = require("cors");
//connecting sequelize?

///do we need pool here? Or does sequelize do this for us?
// const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());
app.listen(3000, () => {
  console.log("server has started on port 5000");
});

//test sequelize connection -> not needed ultimately
// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(
//   "postgres://postgres:postgres@localhost:5432/crop_swap_development"
// );

// sequelize
//   .authenticate()
//   .then(() => {
//     // eslint-disable-next-line no-console
//     console.log("Connection has been established successfully.");
//   })
//   .catch((err) => {
//     // eslint-disable-next-line no-console
//     console.error("Unable to connect to the database:", err);
//   });
