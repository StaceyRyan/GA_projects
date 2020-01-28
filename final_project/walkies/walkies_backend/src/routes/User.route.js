const express = require('express');
const UserRouter = express.Router();
const bcrypt = require('bcryptjs');
const UserModel = require('../models/User.model.js');
const DogModel = require('../models/Dog.model.js');

UserRouter.post('/newHuman', async (req, res) => {
    console.log('new user route', req.body);
    req.body.password = bcrypt.hashSync(req.body.password);

    const userCurrent = await UserModel.findOne({ username: req.body.username });
    if (userCurrent) {
        res.status(400).send({ message: 'User already exists' });
    }
    else {
        const { username, password, preferred_name, email, phone_number } = req.body;
        const user = await UserModel.create({ username, password, preferred_name, email, phone_number });
        if (user)
            //convention says put a message with json
            //.json is used at the App level so can use .send here. If no .json at the App level (server.js), use .json here
            res.status(201).send({ message: 'User created. Please sign in', userID: user.id });
        else res.status(500).send('Could not create user');
    }

});

//homepage route
UserRouter.get('/home', function (req, res) {
    res.send('Walkies home page')
});


module.exports = UserRouter;