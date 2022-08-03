const { response } = require("express");
const db = require("../models");
const User = db.User;
const Crop = db.Crop;

//GET ALL users
// exports.getUsers = async (req, res) => {
//   const users = await User.findAll();
//   return res.send(users);
// };

//GET ALL users -> filter by crops, filter by zipcode, filter by crops AND zipcode
//would want some error handling on front end if no results found in query
exports.getUsers = async (req, res) => {
  const { zipcode } = req.query;
  // console.log(zipcode);
  const { crop } = req.query;
  if (!zipcode && !crop) {
    const users = await User.findAll();
    return res.send(users);
  } else if (zipcode && !crop) {
    const users = await User.findAll({
      where: {
        zipcode,
      },
    });
    return res.send(users);
  } else if (!zipcode && crop) {
    const crops = await Crop.findAll({
      where: {
        available: crop,
      },
      include: User,
    });
    const usersWithCrops = [];
    for (const crop of crops) {
      usersWithCrops.push(crop["User"]);
    }
    return res.send(usersWithCrops);
  } else if (zipcode && crop) {
    const crops = await Crop.findAll({
      where: {
        available: crop,
      },
      include: User,
    });
    const usersWithCrops = [];
    for (const crop of crops) {
      // console.log(crop);
      usersWithCrops.push(crop["User"]);
    }
    const usersWithZipsAndCrops = usersWithCrops.filter(
      (userWithCrops) =>
        zipcode.indexOf(userWithCrops.zipcode.toString()) !== -1
    );
    return res.send(usersWithZipsAndCrops);
  }
};

//GET ONE user
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
      .send({ message: `No user exists with username ${username}` });
  }
  return res.send(user);
};

//CREATE ONE user
exports.createUser = async (req, res) => {
  const { firstName, lastName, username, password, zipcode } = req.body;
  // console.log(username);
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

//UPDATE ONE user
exports.updateUser = async (req, res) => {
  const { firstName, lastName, password, zipcode, bio } = req.body;
  const { username } = req.params;
  const user = await User.findOne({
    where: {
      username,
    },
  });
  if (!user) {
    return res
      .status(404)
      .send({ message: `No user exists with username ${username}` });
  }
  try {
    if (firstName) {
      user.firstName = firstName;
    }
    if (lastName) {
      user.lastName = lastName;
    }
    if (password) {
      user.password = password;
    }
    if (zipcode) {
      user.zipcode = zipcode;
    }
    if (bio) {
      user.bio = bio;
    }
    user.save();
    return res.send({ message: `User ${username} has been updated` });
  } catch (err) {
    return res.status(500).send({
      message: `Error ${err.message}`,
    });
  }
};

//DELETE ONE user
exports.deleteUser = async (req, res) => {
  const { username } = req.params;
  //log statement of username
  const user = await User.findOne({
    where: {
      username,
    },
  });
  if (!user) {
    return res
      .status(404)
      .send({ message: `No user exists with username ${username}` });
  }
  try {
    await user.destroy();
    return res.send({ message: `User ${username} has been deleted` });
  } catch (err) {
    return res.status(500).send({
      message: `Error ${err.message}`,
    });
  }
};
