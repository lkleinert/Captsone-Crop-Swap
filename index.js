"use strict";
//import env variables
require("dotenv/config");
//do we need helmet, path, or fs imported?

const express = require("express");
//make instance of app
const app = express();
//initiate cors
const cors = require("cors");
//to log in our server console
const morgan = require("morgan");
//connecting sequelize?

//middleware (helmet needed?)
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.use((req, res) => {
  res.status(404).send("404: Page not found");
});

app.listen(process.env.EX_APP_PORT, () => {
  console.log(`server has started on port ${process.env.EX_APP_PORT}`);
});
