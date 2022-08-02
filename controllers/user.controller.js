const { response } = require("express");
const db = require("../models");
const User = db.User;

//create user
exports.createUser = async (req, res) => {
  const { firstName, lastName, username, password, zipcode } = req.body;
  if (!firstName || !lastName || !username || !password || !zipcode) {
    return res.status(400).send({
      message:
        "You must enter your first name, last name, a username, password, and zipcode to signup!",
    });
  }
  const usernameExists = await User.findOne({
    where: { username },
  });
  if (usernameExists) {
    return res.status(400).send({
      message: `Username ${username} already exists. Please select another username`,
    });
  }
  try {
    const newUser = await User.create({
      firstName,
      lastName,
      username,
      password,
      zipcode,
    });
    return res.send(newUser);
  } catch (err) {
    return res.status(500).send({
      message: `Error ${err.message}`,
    });
  }
};

//get one user
exports.getUser = async (req, res) => {
  const { username } = req.params;
  //log statement of username
  const user = await User.findOne({
    where: {
      username,
    },
  });
  if (!user) {
    return res
      .status(400)
      .send({ message: "No user with that username found" });
  }
  return res.send(user);
};
