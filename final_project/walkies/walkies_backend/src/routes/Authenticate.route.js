const express = require('express');
const session = require('express-session');
const AuthenticateRouter = express.Router();
const bcrypt = require('bcryptjs');
const UserModel = require('../models/User.model');

//JSON parsing middleware
AuthenticateRouter.use(express.json());

//Middleware
AuthenticateRouter.use((req, res, next) => {
    next();
})

//todo - change salt to SECRET
AuthenticateRouter.post('/new', async (req, res) => {
    //create new user logic here
    const newSalt = bcrypt.genSaltSync(10);

    req.body.password = bcrypt.hashSync(req.body.password, newSalt);
    req.body.token = bcrypt.hashSync(req.body.token, newSalt);

    const user = await UserModel.create(req.body);

res.json({status: "user created", id: user.id});
})

AuthenticateRouter.get('/login', async (req, res) => {
    //login logic here - check if process.env.SECRET is correct
    const salt = process.env.SECRET;

    //check for auth header
    if(!req.headers.authorization){
        res.status(400).json();
        return;
    }

    //react user details from auth
    const [authType, userPass] = req.headers.authorization.split(" ");

    let user = null;

    //check database if user exists
    switch (authType) {
        case "Basic":
            const userPassDecoded = Buffer.from(userPass, 'base64').toString();
            const [userName, userPassword] = userPassDecoded.split(":");
            const passHash = bcrypt.hashSync(userPassword, salt);
            user = await UserModel.findOne({login: userName, password: passHash})
            break;
        case "Bearer":
            //check for token
            const tokenHash = bcrypt.hashSync(userPass, salt);
            user = await UserModel.findOne({token: tokenHash});
            break;
    }
    
    if(!user){
        res.status(404).json({status: "User does not match password. Check username and try again."});
    }
    
    req.session.user = user;

    res.json(user);

})

AuthenticateRouter.use('/logout', (req, res) => {
    //logout logic here
    req.session.destroy();

    res.json({status: "Logged out"});
})

module.exports = AuthenticateRouter;