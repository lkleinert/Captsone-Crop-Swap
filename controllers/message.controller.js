const db = require("../models");
const Message = db.Message;
const { Op } = require("sequelize");

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
