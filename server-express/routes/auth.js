const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----`;
const saltRounds = 10;
router.use(function(req, res, next) {
bcrypt.genSalt(saltRounds, function(err, salt) {
bcrypt.hash(req.body.password, salt, function(err, hash) {
req.hashedPassword = hash;
next();
});
});
})
router.post("/users", async function (req, res, next) {
    if (req.body.username && req.body.password && req.body.passwordConfirmation) {
    if (req.body.password === req.body.passwordConfirmation) {
    const user = new User({
    username: req.body.username,
    password: req.hashedPassword,
    });
    return await user
    .save()
    .then((savedUser) => {
    return res.status(201).json({
    id: savedUser._id,
    username: savedUser.username,
    });
    })
    .catch((error) => {
    return res.status(500).json({ error: error.message });
    });
    }
    res.status(400).json({ error: "Passwords not matching" });
    } else {
    res.status(400).json({ error: "Username or Password Missing" });
    }
    });
    
    router.post("/login", async function (req, res, next) {
        if (req.body.username && req.body.password) {
        const user = await User.findOne()
        .where("username")
        .equals(req.body.username)
        .exec();
        if (user) {
        return bcrypt
        .compare(req.body.password, user.password)
        .then((result) => {
        if (result === true) {
        const token = jwt.sign({ id: user._id }, privateKey, {
        algorithm: "RS256",
        });
        return res.status(200).json({ access_token: token });
        } else {
        return res.status(401).json({ error: "Invalid credentials." });
        }
        })
        .catch((error) => {
        return res.status(500).json({ error: error.message });
        });
        }
        return res.status(401).json({ error: "Invalid credentials." });
        } else {
        res.status(400).json({ error: "Username or Password Missing" });
        }
        });
        
        module.exports=router;