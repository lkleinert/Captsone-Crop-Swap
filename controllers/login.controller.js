const db = require("../models");
const User = db.User;
const bcrypt = require("bcrypt");
const { jwtGenerator } = require("../utils/jwtGenerator");

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: {
      username,
    },
  });

  if (!user) {
    return res
      .status(400)
      .send({ message: `No user exists with username ${username}` });
  }

  const passwordValid = bcrypt.compareSync(password, user.password);

  if (!passwordValid) {
    return res.status(401).json("Password Incorrect.");
  }

  //provide token
  const token = jwtGenerator(username);

  res.send({ token: token, zipcode: user.zipcode });
};

exports.authUser = (req, res) => {
  try {
    const userZip = await User.findOne({
      attributes: [ 'zipcode'],
      where: {
        username: req.user
      },
    });
    res.send({ valid: true, user: req.user, zipcode: userZip });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
