const express = require("express");
const User = require("../controllers/user.controller");
const router = express.Router();

router.get("/:username", User.getUser);
router.post("", User.createUser);

module.exports = router;
