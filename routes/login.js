const express = require("express");
const router = express.Router();
const Login = require("../controllers/login.controller");
const authorization = require("../middleware/authorization");

router.post("/login", Login.loginUser);
router.post("/verified", authorization, Login.authUser);

module.exports = router;
