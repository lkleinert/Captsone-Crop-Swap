const express = require("express");
const Message = require("../controllers/message.controller");
const router = express.Router({ mergeParams: true });

router.get("/", Message.getMessages);
router.post("/", Message.createMessage);
router.get("/threads", Message.getMessageThreads);

module.exports = router;
