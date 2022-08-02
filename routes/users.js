const express = require("express");
const User = require("../controllers/user.controller");
const router = express.Router();

router.get("", User.getUsers);
router.get("/:username", User.getUser);
router.post("", User.createUser);
router.patch("/:username", User.updateUser);
router.delete("/:username", User.deleteUser);

module.exports = router;
