const express = require('express');
const AuthenticateRouter = express.Router();
const bcrypt = require('bcryptjs');
const UserModel = require('../models/User.model');

AuthenticateRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;
    user = await UserModel.findOne({ username });
    if (user) {
        const passwordCheck = await bcrypt.compare(password, user.password);
        if (passwordCheck) {
            console.log("User found. Adding profile to session");
            req.session.user = { id: user._id };
            res.status(200).send({ profile: { username: user.username, preferred_name: user.preferred_name } });
        } else {
            res.status(404).send({ error: "Incorrect login." });
        }

    } else {
        console.log({username, password})
        res.status(404).send({ error: "Incorrect login" });
    }
})

AuthenticateRouter.get('/logout', (req, res) => {
    req.session.destroy();

    res.json({ status: "logged out" });
})

module.exports = AuthenticateRouter;