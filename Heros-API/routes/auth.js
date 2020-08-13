const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const auth = require("../middleware/authentication");
const jwt = require('jsonwebtoken');
const email = require("../middleware/email");
const router = express.Router();

const SECRET_KEY = "123456789";

router.post("/", async (req, res) => {
    try{
        let user = await User.findOne({email: req.body.email}); 
        if(!user) return res.status(400).send("Invalid credentials");

        let isValid = await bcrypt.compare(req.body.password, user.password);

        if(!isValid) return res.status(400).send("Invalid credentials");

        let token = jwt.sign({id: user._id, email: user.email, isAdmin: user.isAdmin}, SECRET_KEY, {expiresIn:10000})
        res.send({token: token});

    } catch(e) {
        
    }
});

module.exports = router