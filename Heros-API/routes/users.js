const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const User = require("../models/user");

router.post("/", async (req, res) => {
  // if email exists in db send back a 400 error saying that he/she is already registered
  //validation checks on other parameters

  try {
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(req.body.password, salt);

    let user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      isAdmin: req.body.isAdmin
    });

    user = await user.save();

    return res.send({
      username: user.username,
      email: user.email,
    });
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;
