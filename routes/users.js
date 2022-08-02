const express = require("express");
const User = require("../controllers/user.controller");
const router = express.Router();

router.get("/:id", User.getUser);
router.post("", User.createUser);

module.exports = router;
