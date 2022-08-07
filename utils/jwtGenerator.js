const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.jwtGenerator = (username) => {
  const payload = {
    user: username,
  };

  return jwt.sign(payload, process.env.JWTSECRET, { expiresIn: "1hr" });
};
