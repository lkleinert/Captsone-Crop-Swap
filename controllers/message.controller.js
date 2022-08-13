const db = require("../models");
const Message = db.Message;
const { Op } = require("sequelize");
const { Sequelize } = require("../models");

exports.createMessage = async (req, res) => {
  const loggedInUser = req.query.authUser;
  const pageUser = req.params.username;
  const { message } = req.body;

  try {
    const newMessage = await Message.create({
      fromUsername: loggedInUser,
      toUsername: pageUser,
      content: message,
    });
    return res.status(201).send(newMessage);
  } catch (err) {
    return res.status(500).send({
      message: `Error ${err.message}`,
    });
  }
};

exports.getMessages = async (req, res) => {
  const loggedInUser = req.query.authUser;
  const pageUser = req.params.username;

  const messages = await Message.findAll({
    where: {
      [Op.or]: [
        {
          [Op.and]: [{ toUsername: loggedInUser }, { fromUsername: pageUser }],
        },
        {
          [Op.and]: [{ toUsername: pageUser }, { fromUsername: loggedInUser }],
        },
      ],
    },
    order: [["id", "ASC"]],
  });
  return res.send(messages);
};

exports.getMessageThreads = async (req, res) => {
  const loggedInUser = req.params.username;

  const threads = await Message.findAll({
    attributes: ["toUsername", "fromUsername"],
    where: {
      [Op.or]: [{ toUsername: loggedInUser }, { fromUsername: loggedInUser }],
    },
    group: ["toUsername", "fromUsername"],
    raw: true,
  });

  const uniqueUsers = new Set();

  for (const thread of threads) {
    if (thread.toUsername !== loggedInUser) {
      uniqueUsers.add(thread.toUsername);
    }

    if (thread.fromUsername !== loggedInUser) {
      uniqueUsers.add(thread.fromUsername);
    }
  }

  return res.send(Array.from(uniqueUsers));
};
